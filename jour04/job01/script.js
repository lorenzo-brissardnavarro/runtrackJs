const button = document.getElementById("button");

button.addEventListener("click", () => {
    fetch("expression.txt")
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur réseau');
        }
        return response.text();
    })
    .then(data => {
        const p = document.createElement("p");
        p.textContent = data;
        document.body.appendChild(p);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
})