function CompterVoyelles(phrase){
    const voyelles = ["a", "e", "i", "o", "u", "y"];
    let compteur = 0;
    for(let i = 0; i < phrase.length ; i++){
        voyelles.includes(phrase[i]) ? compteur++ : "";
    }
    return compteur;
}

let resultat = CompterVoyelles("Coucou");
console.log("La phrase contient " + resultat + " voyelles");

resultat = CompterVoyelles("Ceci est une longue phrase");
console.log("La phrase contient " + resultat + " voyelles");