const PrimeiroNome = document.querySelector("#nome");
const Sobrenomee = document.querySelector("#Sobrenome");
const Email = document.querySelector("#email");
const Celular = document.querySelector("#number");
const Senha = document.querySelector("#password");
const Confirme_Senha = document.querySelector("#confirmPassword");

function Create() {
    const Gênero = document.querySelector('input[name="gender"]:checked').value;
    const cliente = {
        PrimeiroNome: PrimeiroNome.value,
        Sobrenome: Sobrenome.value,
        Email: Email.value,
        Celular: Celular.value,
        Senha: Senha.value,
        Confirme_Senha: Confirme_Senha.value,
        Gênero: Gênero.value,
    };
    console.log("alguma coisa", cliente.PrimeiroNome.value);
    fetch(
        "https://pet-registration-49afd-default-rtdb.firebaseio.com//cliente.json",
        {
            method: "POST",
            body: JSON.stringify(cliente),
        }
    )
        .then((response) => response.json())
        .then(() => {
            PrimeiroNome.value = "";
            Sobrenome.value = "";
            Email.value = "";
            Senha.value = "";
            Confirme_Senha.value = "";
            Gênero.value = "";
            alert("Cliente cadastrado com sucesso!");
        })
        .catch((error) => console.log(error));
}

document
    .getElementById("meuFormulario")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        if (this.checkValidity()) {
            Create();
        } else {
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    });
