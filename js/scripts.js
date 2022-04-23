// $(document).ready(function() {
//   console.log("Script executing!")
//   $("#formOne").submit(function(event) {
//     event.preventDefault();
//     console.log("Submit form successfully reached.");
//     const person1Input = $("input#person1").val();
//     const person2Input = $("input#person2").val();
//     const animalInput = $("input#animal").val();
//     const exclamationInput = $("input#exclamation").val();
//     const verbInput = $("input#verb").val();
//     const nounInput = $("input#noun").val();

//     $(".person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(nounInput);

//     $("#story").show();
//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    let inputsArray = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
    let outputsArray = [".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun"];
    
    let i =0;
    inputsArray.forEach(function(element){
      $(outputsArray[i]).text(element);
      i ++;
    });
    $("#story").show();
  });
});