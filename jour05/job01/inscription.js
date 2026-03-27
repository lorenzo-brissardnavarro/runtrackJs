const form = document.getElementById("form");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,16}$/;
const cpRegex = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;


const nom = document.getElementsByName("nom")[0];
const prenom = document.getElementsByName("prenom")[0];
const email = document.getElementsByName("email")[0];
const mdp = document.getElementsByName("mdp")[0];
const code_postal = document.getElementsByName("code_postal")[0];


function create(element, message){
    remove(element);
    const p = document.createElement("p");
    p.textContent = message;
    p.classList.add("error");
    p.dataset.input = element.name;
    element.insertAdjacentElement("afterend", p);
}


function remove(element){
    const errors = document.querySelectorAll(".error");
    errors.forEach(e => {
        if(e.dataset.input === element.name){
            e.remove();
        }
    });
}

nom.addEventListener("input", () => {
    if(nom.value.trim().length < 2){
        create(nom, "Nom trop court");
    } else {
        remove(nom);
    }
});

prenom.addEventListener("input", () => {
    if(prenom.value.trim().length < 2){
        create(prenom, "Prénom trop court");
    } else {
        remove(prenom);
    }
});

email.addEventListener("input", () => {
    if(!email.value.match(emailRegex)){
        create(email, "Email invalide");
    } else {
        remove(email);
    }
});

mdp.addEventListener("input", () => {
    if(!mdp.value.match(passwordRegex)){
        create(mdp, "Mot de passe invalide");
    } else {
        remove(mdp);
    }
});

code_postal.addEventListener("input", () => {
    if(!code_postal.value.match(cpRegex)){
        create(code_postal, "Code postal invalide");
    } else {
        remove(code_postal);
    }
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    if(nom.value.trim().length < 2){
        create(nom, "Votre nom est trop court");
        isValid = false;
    }

    if(prenom.value.trim().length < 2){
        create(prenom, "Votre prénom est trop court");
        isValid = false;
    }

    if(!email.value.match(emailRegex)){
        create(email, "Votre email est invalide");
        isValid = false;
    }

    if(!mdp.value.match(passwordRegex)){
        create(mdp, "Mot de passe invalide");
        isValid = false;
    }

    if(!code_postal.value.match(cpRegex)){
        create(code_postal, "Code postal invalide");
        isValid = false;
    }

    if(isValid){
        window.location.href = "connexion.html";
    }
});