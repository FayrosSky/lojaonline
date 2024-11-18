document.addEventListerner('DOMcontentLoaded', function () {
    const form = document.getElementById('form-livro');
    const listaLivros = document.getElementById('lista-livros');
    
    form.addEventListerner('submit', function (event) {
        event.preventDefault(); // Previne o envio padrão do formulário
    
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const ano = document.getElementById('ano').value;
        const livroItem = document.createElement('li');
        livroItem.textContent = `${titulo} por ${autor} (${ano})`
        
        listaLivros.appendChild(livroItem);

        form.reset(); //Reseta o formulário
    
    });
});
        