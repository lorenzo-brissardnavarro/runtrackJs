// Changer le lien de l'ancre pour accèder au site de La Plateforme
$('#accueilLink').attr('href', 'https://laplateforme.io');

// Afficher la modale au clic sur le bouton papillon
const papillonModal = new bootstrap.Modal(document.getElementById('papillonModal'));
$('#papillonBtn').click(function(e) {
    e.preventDefault();
    papillonModal.show();
});


// Citation aléatoire de Blade Runner
const citations = ["Tous ces moments se perdront dans l'oubli, comme des larmes dans la pluie.", "Avez-vous déjà désactivé un humain par erreur ?", "T'endors pas, c'est l'heure de mourir.", "J'ai vu tant de choses, que vous, humains, ne pourriez pas croire..."];
$('#rebooterBtn').click(function() {
    const citationAleatoire = citations[Math.floor(Math.random() * citations.length)];
    $('#jumbotronTitle').text(citationAleatoire);
});


// Changement classe si l'utilisateur clique sur un élément de la liste
$('#liste .list-group-item').click(function() {
    $('#liste .list-group-item').removeClass('active');
    $(this).addClass('active');
});

// Barre de progression avec ajout ou soustraction selon le bouton cliqué
$('#progressLeft').click(function() {
    let currentWidth = parseInt($('#progressBar').css('width'));
    currentWidth = Math.max(0, currentWidth - 30);
    $('#progressBar').removeClass('w-75');
    $('#progressBar').css('width', currentWidth + 'px');
});

$('#progressRight').click(function() {
    let currentWidth = parseInt($('#progressBar').css('width'));
    let parentWidth = $('#progressBar').parent().width(); 
    currentWidth = Math.min(parentWidth, currentWidth + 30);
    $('#progressBar').removeClass('w-75');
    $('#progressBar').css('width', currentWidth + 'px');
});


// Mise en place de la pagination
$('#pagination .page-link').click(function(e){
    e.preventDefault();
    const page = $(this).text();
    $('#jumbotronTitle').text('Vous avez cliqué sur la page ' + page);
    $('#pagination .page-item').removeClass('active');
    $(this).parent().addClass('active');
});