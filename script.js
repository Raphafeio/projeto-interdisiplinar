let contador = 1;

function adicionarProduto() {
    const tabela = document
        .getElementById("tabelaProdutos")
        .getElementsByTagName("tbody")[0];
    const novaLinha = tabela.insertRow();

    const celulaId = novaLinha.insertCell(0);
    const celulaNome = novaLinha.insertCell(1);
    const celulaPreco = novaLinha.insertCell(2);
    const celulaQuantidade = novaLinha.insertCell(3);

    celulaId.textContent = contador;
    celulaNome.textContent = `Produto ${contador}`;
    celulaPreco.textContent = `R$ ${(10 + contador).toFixed(2)}`;
    celulaQuantidade.textContent = 1 + contador;

    contador++;
}
