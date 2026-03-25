let grille_jeu = ["logo1.PNG", "logo2.PNG", "logo3.PNG", "logo4.PNG", "logo5.PNG", "logo6.PNG", "logo7.PNG", "logo8.PNG", null];
let grille_correcte = ["logo1.PNG", "logo4.PNG", "logo7.PNG", "logo2.PNG", "logo5.PNG", "logo8.PNG", "logo3.PNG", "logo6.PNG", null];
let compteur = 0;

$("#jouer").on("click", function() {
    afficher(grille_jeu);
    $("#compteur").text(compteur);
});

$("#reset").on("click", function() {
    grille_jeu = ["logo1.PNG", "logo2.PNG", "logo3.PNG", "logo4.PNG", "logo5.PNG", "logo6.PNG", "logo7.PNG", "logo8.PNG", null];
    afficher(grille_jeu);
    compteur = 0;
    $("#compteur").text(compteur);
});

$("#grid").on("click", ".item", function() {
    let case_cliquee = $(this).data("n");
    let case_vide = jQuery.inArray(null, grille_jeu);
    if(deplacementValide(case_cliquee, case_vide)) {
        grille_jeu[case_vide] = grille_jeu[case_cliquee]
        grille_jeu[case_cliquee] = null;
        compteur++;
        $("#compteur").text(compteur);
        if(comparerTableau(grille_correcte, grille_jeu)) {
            $("#jouer").after("<h2>Victoire</h2>");
        }
        afficher(grille_jeu);
    }
})

function afficher(grille_jeu) {
    $("#grid").empty();
    for (let k = 0; k < grille_jeu.length; k++) {
        let resultat = "";
        if(grille_jeu[k] !== null){
           resultat = "<img src='images/" + grille_jeu[k] + "'>"; 
        }
        $("#grid").append("<div class='item' data-n='" + k + "'>" + resultat + "</div>");
    }
}

function deplacementValide(case_cliquee, case_vide) {
    let verdict = false;
    let ligne_case_vide = Math.floor(case_vide / 3);
    let ligne_case_cliquee = Math.floor(case_cliquee / 3);
    if(case_cliquee-3 === case_vide || case_cliquee+3 === case_vide){
        verdict = true;
    }
    else if((case_cliquee-1 === case_vide && ligne_case_cliquee === ligne_case_vide) || (case_cliquee+1 === case_vide && ligne_case_cliquee === ligne_case_vide)) {
        verdict = true;
    }
    return verdict;
}

function comparerTableau(tab1, tab2){
    for (let h = 0; h < tab1.length; h++) {
        if(tab1[h] !== tab2[h]) {
            return false;
        }
    }
    return true;
}