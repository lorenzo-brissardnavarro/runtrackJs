if(!localStorage.getItem("users")){
    localStorage.setItem("users", JSON.stringify([]));
}

function userExists(email){
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.some(user => user.email === email);
}

const form = document.getElementById("form");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,16}$/;

const email = document.getElementsByName("email")[0];
const mdp = document.getElementsByName("mdp")[0];


function create(element, message){
    remove(element);
    element.insertAdjacentHTML("afterend", `<div data-input="${element.name}" class="error flex items-start rounded-md sm:items-center p-2 my-4 text-sm text-red-500 bg-red-100" role="alert"><svg class="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg><p>${message}</p></div>`);
}


function remove(element){
    const errors = document.querySelectorAll(".error");
    errors.forEach(e => {
        if(e.dataset.input === element.name){
            e.remove();
        }
    });
}

function showNotification() {
    const notif = document.getElementById('notification');
    notif.textContent = "Inscription réussie";
    notif.classList.remove('hidden');
    setTimeout(() => notif.classList.add('hidden'), 1000);
}

email.addEventListener("input", () => {
    const domaine = email.value.split("@");
    if(!email.value.match(emailRegex)){
        create(email, "Email invalide");
    } else if (domaine[1] !== "laplateforme.io") {
        create(email, "Le domaine de l'adresse mail ne correspond pas à celui de La Plateforme");
    }
    else {
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

    if(!email.value.match(emailRegex) || (email.value.split("@")[1] !== "laplateforme.io")){
        create(email, "Votre email est invalide");
        isValid = false;
    }

    if(!mdp.value.match(passwordRegex)){
        create(mdp, "Mot de passe invalide");
        isValid = false;
    }

    if(userExists(email.value)){
        create(email, "Un compte existe déjà avec cet email");
        isValid = false;
    }

    if(isValid){
        const users = JSON.parse(localStorage.getItem("users"));
        const role = email.value === "aicha@laplateforme.io" ? "moderator" : "user";
        const newUser = {
            email: email.value,
            password: btoa(mdp.value),
            role: role,
            calendar: {}
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        showNotification();
        setTimeout(() => {
            window.location.href = "connexion.html";
        }, 1000);
    }

});