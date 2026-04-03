const currentUser = localStorage.getItem("currentUser");
const users = JSON.parse(localStorage.getItem("users"));

const user = users.find(u => u.email === currentUser);

if(!user || user.role !== "moderator"){
    window.location.href = "connexion.html";
}

const tableBody = document.getElementById("table-body");
const tableBodyRights = document.getElementById("table-body-rights");

function updateBackofficeTable() {
    const users = JSON.parse(localStorage.getItem("users"));
    tableBody.innerHTML = "";

    users.forEach(user => {
        for (const date in user.calendar) {
            const statut = user.calendar[date];
            const row = document.createElement("tr");
            let statusColor = "";
            switch(statut) {
                case "en attente":
                    statusColor = "bg-yellow-200 text-yellow-800";
                    break;
                case "accepté":
                    statusColor = "bg-green-200 text-green-800";
                    break;
                case "refusé":
                    statusColor = "bg-red-200 text-red-800";
                    break;
            }
            let actionHtml = "";
            if (statut === "en attente") {
                actionHtml = `
                    <button class="accept bg-green-500 hover:bg-green-600 cursor-pointer text-white px-3 py-1 rounded-lg mr-2" data-email="${user.email}" data-date="${date}">Accepter</button>
                    <button class="refuse bg-red-500 hover:bg-red-600 cursor-pointer text-white px-3 py-1 rounded-lg" data-email="${user.email}" data-date="${date}">Refuser</button>
                `;
            }
            row.innerHTML = `
                <td class="p-4 border-b border-slate-300">${user.email}</td>
                <td class="p-4 border-b border-slate-300">${date}</td>
                <td class="p-4 border-b border-slate-300 ${statusColor} capitalize font-medium">${statut}</td>
                <td class="p-4 border-b border-slate-300 flex gap-2">${actionHtml}</td>
            `;

            tableBody.appendChild(row);
        }
    });
    attachButtonsEvents();
}

function attachButtonsEvents() {
    const acceptButtons = document.querySelectorAll(".accept");
    const refuseButtons = document.querySelectorAll(".refuse");

    acceptButtons.forEach(btn => {
        btn.addEventListener("click", () => handleDecision(btn.dataset.email, btn.dataset.date, "accepté"));
    });

    refuseButtons.forEach(btn => {
        btn.addEventListener("click", () => handleDecision(btn.dataset.email, btn.dataset.date, "refusé"));
    });
}

function handleDecision(email, date, decision) {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(u => u.email === email);

    if (!user || !user.calendar[date]){
        return;
    }
    user.calendar[date] = decision;
    localStorage.setItem("users", JSON.stringify(users));

    updateBackofficeTable();
}

function updateRightsTable() {
    const users = JSON.parse(localStorage.getItem("users"));
    tableBodyRights.innerHTML = "";

    users.forEach(user => {
        const row = document.createElement("tr");
        let currentRoleColor = "";
        switch(user.role) {
            case "moderator":
                currentRoleColor = "bg-yellow-200 text-yellow-800";
                break;
            case "user":
                currentRoleColor = "bg-gray-200 text-gray-800";
                break;
        }
        row.innerHTML = `
            <td class="p-4 border-b border-slate-300">${user.email}</td>
            <td class="p-4 border-b border-slate-300">${user.role}</td>
            <td class="p-4 border-b border-slate-300"><button class="role bg-green-500 hover:bg-green-600 cursor-pointer text-white px-3 py-1 rounded-lg mr-2" data-email="${user.email}">Changer le rôle</button></td>
        `;

        tableBodyRights.appendChild(row);
    });
    RoleButton();
}

function RoleButton() {
    const roleButtons = document.querySelectorAll(".role");

    roleButtons.forEach(btn => {
        btn.addEventListener("click", () => ChangeRole(btn.dataset.email));
    });
}

function ChangeRole(email) {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(u => u.email === email);

    if (!user || !user.role){
        return;
    }

    const decision = user.role === "user" ? "moderator" : "user";
    user.role = decision;
    localStorage.setItem("users", JSON.stringify(users));

    updateRightsTable();
}

window.addEventListener("load", updateBackofficeTable);
window.addEventListener("load", updateRightsTable);


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