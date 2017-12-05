$(document).ready(function() {
  $("form#input").submit(function(event) {
      event.preventDefault();
    var numberToCountTo = parseInt($("#countTo").val());
    var numberToCountBy = parseInt($("#countBy").val());

    console.log(numberToCountBy);


    var steps = 0;
    for (var i = 1; i <= numberToCountTo; i+= numberToCountBy) {
      steps = steps + numberToCountBy;
      $("#results").append("<li>" + steps + "</li>");
      console.log("i is: " + steps);
      }

      alert("Total is: " + steps);
    });
});
