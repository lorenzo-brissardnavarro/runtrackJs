let bool = false; 

function showhide(){
    const main = document.getElementById("main");
    if(bool === false){
        const article = document.createElement("article");
        article.id = "article";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        main.appendChild(article);
    } else {
        let article = document.getElementById("article");
        if (article) {
            article.remove();
        }
    }
    bool = !bool;
}
