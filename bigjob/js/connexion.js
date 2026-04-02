const form = document.getElementById("form");

const email = document.getElementsByName("email")[0];
const mdp = document.getElementsByName("mdp")[0];


function create(element, message){
    remove(element);
    element.insertAdjacentHTML("afterend", `<div data-input="${element.name}" class="error flex items-start rounded-md sm:items-center p-2 my-4 text-sm text-red-500 rounded-base bg-red-100" role="alert"><svg class="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg><p>${message}</p></div>`);
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
    notif.textContent = "Connexion réussie";
    notif.classList.remove('hidden');
    setTimeout(() => notif.classList.add('hidden'), 1000);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(u => u.email === email.value);

    if(!user || (atob(user.password) !== mdp.value)){
        create(mdp, "Email ou mot de passe incorrect");
        isValid = false;
    }

    if(isValid){
        localStorage.setItem("currentUser", user.email);
    }

    showNotification();
    setTimeout(() => {
        if(user.role === "moderator"){
            window.location.href = "backoffice.html";
        } else {
            window.location.href = "calendrier.html";
        }
    }, 1000);
});