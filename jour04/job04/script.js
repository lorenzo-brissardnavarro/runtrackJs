const button = document.getElementById("update");
const tableBody = document.getElementById("table-body");

button.addEventListener("click", async () => {
    try {
        const response = await fetch("utilisateur.json");
        if (!response.ok) {
            throw new Error("Erreur " + response.status);
        }
        const users = await response.json();

        tableBody.innerHTML = "";
        users.forEach(user => {
            tableBody.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                </tr>
            `;
        });
    } catch (err) {
        console.error(err);
    }

});