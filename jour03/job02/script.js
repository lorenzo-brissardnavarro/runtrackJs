const tableau = ["arc1.png", "arc2.png", "arc3.png", "arc4.png", "arc5.png", "arc6.png"];

function randomize(tab) {
    let new_tab = tab.slice();
    let i, j, tmp;
    for (i = new_tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = new_tab[i];
        new_tab[i] = new_tab[j];
        new_tab[j] = tmp;
    }
    return new_tab;
}

function comparerTableau(tab1, tab2){
    for (let h = 0; h < tab1.length; h++) {
        if(tab1[h] !== tab2[h]) {
            return false;
        }
    }
    return true;
}

function afficherTexte(bool){
    if(bool) {
        $("#section-images").after("<h2 id='verdict'>Vous avez gagné</h2>");
        $("#verdict").css("color", "green");
    } else {
        $("#section-images").after("<h2 id='verdict'>Vous avez perdu</h2>");
        $("#verdict").css("color", "red");
    }
}

$("#button").on("click", function() {
    tableau_meg = randomize(tableau);
    $("#section-images").remove();
    $("#verdict").remove();
    $("#button").after("<section id='section-images'></section>");
    for (let k = 0; k < tableau_meg.length; k++) {
        $("#section-images").append("<img src='images/" + tableau_meg[k] + "'>");
    }
    let verdict = comparerTableau(tableau_meg, tableau);
    afficherTexte(verdict);
});