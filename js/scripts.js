$(document).ready(function() {

  $("#submit-button").click(function(event) {
    event.preventDefault();

    var warningArray = [];
    var healthArray = [];
    var copingArray = [];

    $("input:checkbox[name=warnings]:checked").each(function(item){
      var warnings = $(this).val();
      warningArray.push(warnings);

    });

    $("input:checkbox[name=health]:checked").each(function(){
      var health = $(this).val();
      healthArray.push(health);

    });
    $("input:checkbox[name=coping]:checked").each(function(){
      var coping = $(this).val();

      if (warningArray.length >= 3 && healthArray.length <=2) {
        $("p").text("You need to see a doctor cuz your fucked up")
      }
      else {$("p").text("You need to see a nobody")}

    });
  });








});


//
// $("input:checkbox[name=health]:checked").each(function(){
//   var health = $(this).val();
// $("input:checkbox[name=coping]:checked").each(function(){
//   var warnings = $(this).val();
