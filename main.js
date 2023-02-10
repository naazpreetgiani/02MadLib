//Mad Lib

//Add an Event Listener to the button to run the madLib function
document.getElementById("btn").addEventListener("click", madLib);

//Store mad lib code in a function
function madLib() {
  //INPUT
  let food = document.getElementById("food-in").value;
  let name = document.getElementById("name-in").value;
  let noun = document.getElementById("noun-in").value;

  //PROCESS
  let msg = `It was ${food} day at school, and ${name} was super excited for lunch. But when they went outside to eat, a ${noun} stole ${name}'s ${food}! `;

  //OUTPUT
  document.getElementById("output").innerHTML = msg;
}
