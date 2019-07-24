alert("Give meh money");

window.onload = setup;

function setup() {
  var button = document.getElementById("button1");
  button.onclick = colorChange;
}

function colorChange() {
  document.getElementById("color2").style.color = "lightBlue";
}
