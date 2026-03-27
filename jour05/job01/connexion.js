const form = document.getElementById("form-connexion");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,16}$/;

const email = document.getElementsByName("email")[0];
const mdp = document.getElementsByName("mdp")[0];

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

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    if(!email.value.match(emailRegex)){
        create(email, "Email invalide");
        isValid = false;
    }

    if(!mdp.value.match(passwordRegex)){
        create(mdp, "Mot de passe invalide");
        isValid = false;
    }

    if(isValid){
        alert("Connexion réussie !");
    }
});