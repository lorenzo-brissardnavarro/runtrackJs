
$("#texte").focus(function(){
    $("#texte").animate({width: '+=400px'});
})

$("#texte").blur(function(){
  $("#texte").animate({width: '170px'});
});