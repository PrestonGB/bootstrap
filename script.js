var database = [
  {
    firstName: "Preston",
    lastName: "Bebas",
    birthMonth: "November",
    location: "New York",
    age: 29,
    funFact: "You Love Spider-Man!",
  },
  {
    firstName: "Petra",
    lastName: "Bebas",
    birthMonth: "March",
    location: "New York",
    age: 34,
    funFact: "You Love Knitting!",
  },
  {
    firstName: "Marilee",
    lastName: "Pray",
    birthMonth: "July",
    location: "New York",
    age: "I didn't know Emilee had a younger sister!",
    funFact: "You are a mermaid!",
  },
  {
    firstName: "Brian",
    lastName: "Stern",
    birthMonth: "January",
    location: "New York",
    age: 39,
    funFact: "You Love Tennis!",
  },

];

var firstNamePrompt = prompt("What is your first name (please capitalize first letter)?");
var lastNamePrompt = prompt("What is your last name (please capitalize first letter)?");

function isUserValid(first, last) {
  for (var i = 0; i < database.length; i++) {
    if (first === database[i].firstName && last === database[i].lastName) {
      alert("Welcome " + first + ", let me guess some things about you!");
      alert("You were born in the month of " + database[i].birthMonth);
      alert("You live in " + database[i].location);
      alert("You are this many years old... " + database[i].age);
      alert("And.... " + database[i].funFact)
      return true;
    }
  } return false;
}

function signIn(first, last) {
  if (isUserValid(first,last) === true) {
    return;
  } else {
    alert("I do not know who you are. Please try again");
  }
}

signIn(firstNamePrompt, lastNamePrompt);

var buttonhero = document.getElementById("enterhero");
var inputhero = document.getElementById("userinputhero");
var buttonvillain = document.getElementById("entervillain");
var inputvillain = document.getElementById("userinputvillain");
var ol = document.querySelector("ol");
var olvillain = document.querySelector("ol.villain");
var body = document.querySelector("body");
var team = document.querySelectorAll(".team");

function inputLengthHero() {
  return inputhero.value.length;
}

function inputLengthVillain() {
  return inputvillain.value.length;
}


function createListElementHero() {
  var li = document.createElement("li");
  var button = document.createElement("button");
	li.appendChild(document.createTextNode(inputhero.value));
	ol.appendChild(li);
	inputhero.value = "";
	button.appendChild(document.createTextNode("Delete"));
	button.classList="delete";
	li.appendChild(button);
}

function createListElementVillain() {
  var li = document.createElement("li");
  var button = document.createElement("button");
	li.appendChild(document.createTextNode(inputvillain.value));
	olvillain.appendChild(li);
	inputvillain.value = "";
	button.appendChild(document.createTextNode("Delete"));
	button.classList="delete";
	li.appendChild(button);
}

function addListAfterClickHero () {
  if (inputLengthHero() > 0) {
    createListElementHero();
  }
}

function addListAfterClickVillain () {
  if (inputLengthVillain() > 0) {
    createListElementVillain();
  }
}

function addListAfterEnterHero (event) {
  if (inputLengthHero() > 0 && event.keyCode === 13) {
    createListElementHero();
  }
}

function addListAfterEnterVillain (event) {
  if (inputLengthVillain() > 0 && event.keyCode === 13) {
    createListElementVillain();
  }
}

function deleteListItem(event) {
	if(event.target.className==="delete") {
		event.target.parentNode.remove("li");
	}
}


buttonhero.addEventListener("click", addListAfterClickHero);

inputhero.addEventListener("keypress", addListAfterEnterHero);

buttonvillain.addEventListener("click", addListAfterClickVillain);

inputvillain.addEventListener("keypress", addListAfterEnterVillain);

body.addEventListener("click", deleteListItem);
