$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var personInRoomInput = $("input#person-in-room").val();
    var personInRoom2Input = $("input#other-person-in-room").val();
    var astronomicalEventInput = $("input#astronomical-event").val();
    var expletiveInput = $("input#expletive").val();
    var pastTenseVerbInput = $("input#past-tense-verb").val();
    var pluralQuantityInput = $("input#plural-quantity").val();
console.log(personInRoomInput);


    $(".person-in-room").text(personInRoomInput);
    $(".other-person-in-room").text(personInRoom2Input);
    $(".astronomical-event").text(astronomicalEventInput);
    $(".expletive").text(expletiveInput);
    $(".past-tense-verb").text(pastTenseVerbInput);
    $(".plural-quantity").text(pluralQuantityInput);

    $("#story").show();

    event.preventDefault();
  });
});
