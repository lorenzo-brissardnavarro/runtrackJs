const currentUser = localStorage.getItem("currentUser");

if(!currentUser){
    window.location.href = "connexion.html";
}

const dateInput = document.getElementById("date");
const demandeBtn = document.getElementById("demande");
const tableContainer = document.getElementById("table-container");
const tableBody = document.getElementById("table-body");

function isPastDate(dateString) {
    const today = Date.now();
    const date = Date.parse(dateString);
    return date < today;
}


function updateTable(user) {
    const calendar = user.calendar;

    if (Object.keys(calendar).length === 0) {
        tableContainer.classList.add("hidden");
        return;
    }

    tableContainer.classList.remove("hidden");
    tableBody.innerHTML = "";

    for (const date in calendar) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="p-4 border-b border-slate-300">${user.email}</td>
            <td class="p-4 border-b border-slate-300">${date}</td>
            <td class="p-4 border-b border-slate-300 capitalize">${calendar[date]}</td>
            <td class="p-4 border-b border-slate-300"></td>
        `;
        tableBody.appendChild(row);
    }
}


function makeRequest() {
    const date = dateInput.value;
    if (!date) {
        alert("Veuillez sélectionner une date.");
        return;
    }

    if (isPastDate(date)) {
        alert("Date passée, prise de RDV impossible.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users"));
    const currentUserEmail = localStorage.getItem("currentUser");
    const user = users.find(u => u.email === currentUserEmail);

    if (user.calendar[date]) {
        alert("Vous avez déjà fait une demande pour cette date.");
        return;
    }

    user.calendar[date] = "en attente";
    localStorage.setItem("users", JSON.stringify(users));
    updateTable(user);
}

function init() {
    const users = JSON.parse(localStorage.getItem("users"));
    const currentUserEmail = localStorage.getItem("currentUser");
    const user = users.find(u => u.email === currentUserEmail);

    if (!user) return;
    updateTable(user);
}

demandeBtn.addEventListener("click", makeRequest);
window.addEventListener("load", init);


const toggleBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem("currentUser");
    window.location.href = "connexion.html";
});