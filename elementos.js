var h1Titulo1 = document.createElement("h1");
h1Titulo1.innerText = "Titulo 1";

document.body.appendChild(h1Titulo1);

var varLabel = document.createElement("label");
varLabel.innerText = "Rótulo";

document.body.appendChild(varLabel);

function funcao() {
    console.log("Clicou no container!");
}

var varDiv = document.createElement("div");
varDiv.innerText = "Container";
varDiv.title = "Container";
varDiv.onclick = funcao;

document.body.appendChild(varDiv);