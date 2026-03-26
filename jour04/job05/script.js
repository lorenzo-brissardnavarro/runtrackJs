async function loadAPI() {
    try {
        const response = await fetch("https://citation.lecog.fr/public/api/random-quote.php");
        if (!response.ok) {
            throw new Error("Erreur réseau " + response.status);
        }
        let donnees = await response.json();
        const container = document.getElementById("result");
        container.innerHTML = "";
        container.innerHTML = `
            <h1>${donnees.data.author.forename} ${donnees.data.author.name}</h1>
            <p>${donnees.data.text}</p>
        `;
    } catch (err) {
        console.error('Erreur', err);
    }
}