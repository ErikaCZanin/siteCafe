$(document).ready(function() {
    const quantidadeElemento = document.getElementById('quantidade');
    const botoesCarrinho = $('.botoes-carrinho');
    
    let quantidade = parseInt(quantidadeElemento.textContent) || 0;

    // Captura todos os botões "Adicionar ao carrinho"
    document.querySelectorAll('.adicionar-carrinho').forEach(button => {
        button.addEventListener('click', () => {
            quantidade++;
            quantidadeElemento.textContent = quantidade;
            botoesCarrinho.slideDown(); 
        });
    });

    // Captura todos os botões "Remover do carrinho"
    document.querySelectorAll('.remover-carrinho').forEach(button => {
        button.addEventListener('click', () => {
            if (quantidade > 0) {
                quantidade--;
                quantidadeElemento.textContent = quantidade;
                
                if (quantidade === 0) {
                    botoesCarrinho.slideUp();
                }
            }
        });
    });

    // Evento de clique para limpar o carrinho
    $('#limpar').click(function() {
        quantidade = 0;
        quantidadeElemento.textContent = quantidade; 
        botoesCarrinho.slideUp(); 
    });

    // Função para validar e-mail
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Validação do e-mail ao clicar no botão de envio
    $('#submit-button').click(function() {
        const email = $('#email').val();
        if (validateEmail(email)) {
            alert('E-mail válido!');
        } else {
            alert('E-mail inválido!');
        }
    });

    $('.produto').each(function() {
        const produto = $(this);
        const quantidadeElemento = produto.find('.btCompra h7'); // Captura o <h7> específico do produto
        let quantidade = parseInt(quantidadeElemento.text()) || 1; // Obtém o valor atual

        // Adicionar ao carrinho
        produto.find('.adicionar-carrinho').click(function() {
            quantidade++;
            quantidadeElemento.text(quantidade);
        });

        // Remover do carrinho
        produto.find('.remover-carrinho').click(function() {
            if (quantidade > 1) { // Impede que a quantidade fique menor que 1
                quantidade--;
                quantidadeElemento.text(quantidade);
            }
        });
    });
});
