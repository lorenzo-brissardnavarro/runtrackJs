function estPremier(nombre) {
    if (nombre < 1) {
        return false;
    } else {
        for (let i = 2; i < nombre ; i++){
            if (nombre % i === 0) {
                return false;
            }
        }
    return true;
    }
}

function sommeNombresPremiers(nb1, nb2){
    if(estPremier(nb1) && estPremier(nb2)){
        return nb1 + nb2;
    } else {
        return false;
    }
}

console.log(sommeNombresPremiers(7, 11));
console.log(sommeNombresPremiers(7, 9));
console.log(sommeNombresPremiers(9, 11));
console.log(sommeNombresPremiers(9, 9));