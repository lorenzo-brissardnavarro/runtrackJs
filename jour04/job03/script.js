const form = document.getElementById("form");
const filtrer = document.getElementById("filtrer");
const result = document.getElementById("result");

filtrer.addEventListener("click", async () => {
    const formData = new FormData(form);
    const id = formData.get("id").trim();
    const nom = formData.get("nom").trim();
    const type = formData.get("type");

    const response = await fetch("pokemon.json");
    const data = await response.json();

    const filtres = data.filter(pokemon => {
        return ((id === "" || pokemon.id == id) && (nom === "" || pokemon.name.french.toLowerCase().includes(nom.toLowerCase())) && (type === "" || pokemon.type.includes(type)));
    });

    result.innerHTML = "";
    filtres.forEach(pokemon => {
        result.innerHTML += `
            <div>
                <h2>${pokemon.name.french}</h2>
                <p>ID : ${pokemon.id}</p>
                <p>Type : ${pokemon.type.join(", ")}</p>
            </div>
        `;
    });

});