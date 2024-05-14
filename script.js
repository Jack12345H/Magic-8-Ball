document.getElementById("btn").addEventListener("click", giveAnswer);
document.getElementById("question1").value.toLowerCase();

function giveAnswer() {
  let answer = Math.random();
  let question = document.getElementById("question1").value.toLowerCase();
  document.getElementById("question1").innerHTML = "";

  if (question === "will i get rich one day?") {
    document.getElementById("magicAnswer").innerHTML =
      "If you're hardworking then one day you'll get wealthy, otherwise no.";
  } else if (question === "does a magic 8 ball actually work?") {
    document.getElementById("magicAnswer").innerHTML =
      "Of course! you're just not focussed so I can't give accurate answers sometimes";
  } else if (question === "do you know what will happen next?") {
    document.getElementById("magicAnswer").innerHTML =
      "That's for you to decide";
  } else if (answer < 0.2) {
    document.getElementById("magicAnswer").innerHTML = "Yes";
  } else if (answer < 0.4) {
    document.getElementById("magicAnswer").innerHTML = "probably";
  } else if (answer < 0.6) {
    document.getElementById("magicAnswer").innerHTML =
      "I didn't understand, please ask again";
  } else if (answer < 0.8) {
    document.getElementById("magicAnswer").innerHTML = "No";
  } else if (answer < 1) {
    document.getElementById("magicAnswer").innerHTML = "probably not";
  }
}
