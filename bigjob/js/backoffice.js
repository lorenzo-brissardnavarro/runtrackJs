const currentUser = localStorage.getItem("currentUser");
const users = JSON.parse(localStorage.getItem("users"));

const user = users.find(u => u.email === currentUser);

if(!user || user.role !== "moderator"){
    window.location.href = "connexion.html";
}

const tableBody = document.getElementById("table-body");

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
                    <button class="accept bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg mr-2" data-email="${user.email}" data-date="${date}">Accepter</button>
                    <button class="refuse bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg" data-email="${user.email}" data-date="${date}">Refuser</button>
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
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email);

    if (!user || !user.calendar[date]) return;

    user.calendar[date] = decision;
    localStorage.setItem("users", JSON.stringify(users));

    updateBackofficeTable();
}

window.addEventListener("load", updateBackofficeTable);