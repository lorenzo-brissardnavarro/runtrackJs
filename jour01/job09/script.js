function TriCroissant(tab){
    for(let i = 1 ; i < tab.length ; i++){
        for(let k = i ; k > 0 ; k--) {
            if(tab[k] < tab[k-1]){
                let nb = tab[k];
                tab[k] = tab[k-1];
                tab[k-1] = nb;
            }
        }
    }
    return tab;
}

function TriDecroissant(tab){
    for(let i = 1 ; i < tab.length ; i++){
        for(let k = i ; k > 0 ; k--) {
            if(tab[k] > tab[k-1]){
                let nb = tab[k];
                tab[k] = tab[k-1];
                tab[k-1] = nb;
            }
        }
    }
    return tab;
}

function tri(numbers, order){
    if(order === "asc") {
        console.log(TriCroissant(numbers));
    } else if(order === "desc") {
        console.log(TriDecroissant(numbers));
    } else {
        console.log("ordre inconnu");
    }
}

tab1 = [5, 4, 2, 8, 5];
tri(tab1, "asc");
tri(tab1, "desc");
