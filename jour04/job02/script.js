let data = {
  name: "La Plateforme",
  address: "8 rue d'Hozier",
  city: "Marseille",
  nb_staff: "11",
  creation: "2019"
};

function jsonValueKey(chaine, cle){
    const p = document.createElement("p");
    p.textContent = chaine[cle];
    document.body.appendChild(p);
}

jsonValueKey(data, "city");
