function estBisextile(annee) {
    if(annee % 4 === 0 && annee % 100 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(estBisextile(2020));
console.log(estBisextile(2021));