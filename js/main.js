$(document).ready(function () {
    const quantidadeElemento = $('#quantidade');
    const botoesCarrinho = $('.botoes-carrinho');

    let quantidadeCarrinho = 0; // Quantidade total no carrinho

    $('.produto').each(function () {
        const produto = $(this);
        const quantidadeElementoProduto = produto.find('.btCompra span'); // Corrigido o nome da variável
        let quantidade = parseInt(quantidadeElementoProduto.text()) || 1;

        // Botão de aumentar quantidade
        produto.find('.incrementar').click(function () {
            quantidade++;
            quantidadeElementoProduto.text(quantidade);
        });

        // Botão de diminuir quantidade
        produto.find('.remover-carrinho').click(function () {
            if (quantidade > 1) {
                quantidade--;
                quantidadeElementoProduto.text(quantidade);
            }
        });

        // Adicionar ao carrinho
        produto.find('.adicionar-carrinho').click(function () {
            quantidadeCarrinho += quantidade;
            $('#quantidade').text(quantidadeCarrinho);
            botoesCarrinho.slideDown();
        });
    });

    // Evento de clique para limpar o carrinho
    $('#limpar').click(function () {
        quantidadeCarrinho = 0;
        $('#quantidade').text(quantidadeCarrinho);
        botoesCarrinho.slideUp();

        // Reseta todos os spans de quantidade para 1
        $('.produto .btCompra span').text('1');
    });

    // Adicionando e removendo a classe 'ativo' nos botões de favorito
    $(".btnFavorito").click(function () {
        $(this).toggleClass("ativo");
    });
});
