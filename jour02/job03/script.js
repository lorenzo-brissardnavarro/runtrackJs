const button = document.getElementById("button");
let resultat = 0;

function addOne(){
    resultat++;
    document.getElementById("compteur").textContent = resultat;
}

button.addEventListener("click", () => {
    addOne();
})

function toZero() {
    resultat = 0;
    document.getElementById("compteur").textContent = resultat;
}