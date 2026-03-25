$("#button").on("click", function() {
    $("#button").after("<p id='texte' >Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.</p>");
});

$("#button2").on("click", function() {
    $("#texte").remove();
});