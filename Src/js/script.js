function mostrarFormulario(nomeVinho, precoVinho) {
    const formulario = document.getElementById("formularioCompra");
    const vinhoSelecionado = document.getElementById("vinhoSelecionado");

    vinhoSelecionado.textContent = `Você selecionou o vinho ${nomeVinho} por ${precoVinho}.`;

    formulario.style.display = "block";
}

function fecharFormulario() {
    const formulario = document.getElementById("formularioCompra");
    formulario.style.display = "none";
}