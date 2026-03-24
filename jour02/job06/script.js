function Action() {
    document.body.style.backgroundColor = "#0463FC";
    const title = document.createElement("h1");
    title.textContent = "Vous avez trouvé le secret de la plateforme";
    document.body.appendChild(title);
}

const konamiCode = ["ArrowUp","ArrowUp", "ArrowDown","ArrowDown", "ArrowLeft","ArrowRight", "ArrowLeft","ArrowRight","KeyB","KeyQ"];

let index = 0;

window.addEventListener("keydown", (event) => {
    if (event.code === konamiCode[index]) {
        index++;
        if (index === konamiCode.length) {
            Action();
            index = 0;
        }
    } else {
        index = 0;
    }
});