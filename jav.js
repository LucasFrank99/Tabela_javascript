function adicionarContato() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    if (nome && telefone) {
        const table = document.getElementById("contatos");
        const newRow = table.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.innerHTML = nome;
        cell2.innerHTML = telefone;

        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    }
}
