function showide(){
    const main = document.getElementById("main");
    if(bool === false){
        const article = document.createElement("article");
        article.id = "article";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        main.appendChild(article);
    } else {
        let article = document.getElementById("article");
        article.remove();
    }
    bool = !bool;
}
let bool = false; 