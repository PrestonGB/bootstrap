let database = [
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

let firstNamePrompt = prompt("What is your first name (please capitalize first letter)?");
let lastNamePrompt = prompt("What is your last name (please capitalize first letter)?");

let isUserValid = (first, last) => {
  for (let i = 0; i < database.length; i++) {
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

let signIn = (first, last) => {
  if (isUserValid(first,last) === true) {
    return;
  } else {
    alert("I do not know who you are. Please try again");
  }
}

signIn(firstNamePrompt, lastNamePrompt);

let stockHeroes = [
  "Spider-Man",
  "Iron Man",
  "Captain America",
  "Thor",
  "Hawkeye",
  "Black Widow",
  "The Hulk",
  "Scarlet Witch",
  "Vision",
  "Ant Man",
  "War Machine",
  "Falcon",
  "Doctor Strange",
  "Black Panter"
]

let stockVillains = [
  "Green Goblin",
  "Dr. Doom",
  "Iron Monger",
  "Red Skull",
  "Loki",
  "Thanos",
  "The Vulture",
  "The Mandarin",
  "Yellow Jacket",
  "Dormammu",
  "Killmonger",
  "Ultron",
  "Baron Zemo",
  "Hela"
]

let buttonhero = document.getElementById("enterhero");
let inputhero = document.getElementById("userinputhero");
let randomherobutton = document.getElementById("randomherobutton")
let buttonvillain = document.getElementById("entervillain");
let inputvillain = document.getElementById("userinputvillain");
let randomvillainbutton = document.getElementById("randomvillainbutton")
let ol = document.querySelector("ol");
let olvillain = document.querySelector("ol.villain");
let body = document.querySelector("body");
let team = document.querySelectorAll(".team");
let newHero = '';

let inputLengthHero = () => inputhero.value.length;

let inputLengthVillain = () => inputvillain.value.length;

let heroTeamLength = () => (ol.childElementCount < 7) ? true : false;

let villainTeamLength = () => (olvillain.childElementCount < 7) ? true : false;

let randomHeroIndex = () => Math.floor(Math.random()*stockHeroes.length);

let randomHeroName = () => stockHeroes[randomHeroIndex()];

let randomHeroCheck = () => {
  for (let i = 0; i < stockHeroes.length; i++) {
    if(stockHeroes[0] === randomHeroName()) {
      return true
    } else {
      return false;
    }
  }
}

let randomVillainIndex = () => Math.floor(Math.random()*stockVillains.length);

let randomVillainName = () => stockVillains[randomVillainIndex()];

let createRandomHero = () => {
  if (heroTeamLength()) {
    let randomHero =
    newHero=randomHero;
  } else {
    alert("Team can only have at most 7 members");
  }
}

let addRandomHero = () => {
  console.log(randomHero);}
  /*
  for (let heroIndex = 0; heroIndex < ol.childElementCount; heroIndex++) {
    if(randomHero === ol.children[heroIndex].childeNodes[0].nodeValue) {
      createRandomHero();
    } else {
        let li = document.createElement("li");
        let button = document.createElement("button");
        li.appendChild(document.createTextNode(randomHero));
        ol.appendChild(li);
        button.appendChild(document.createTextNode("Delete"));
        button.classList="delete";
        li.appendChild(button);
    }
  }
}*/

let createRandomVillain = () => {
  if (villainTeamLength()) {
    let randomVillain = stockVillains[Math.floor(Math.random()*((stockVillains.length)))];
    let li = document.createElement("li");
    let button = document.createElement("button");
    li.appendChild(document.createTextNode(randomVillain));
    olvillain.appendChild(li);
    button.appendChild(document.createTextNode("Delete"));
    button.classList="delete";
    li.appendChild(button);
  } else {
    alert("Team can only have at most 7 members");
  }
}

let createListElementHero = () => {
  let li = document.createElement("li");
  let button = document.createElement("button");
	li.appendChild(document.createTextNode(inputhero.value));
	ol.appendChild(li);
	inputhero.value = "";
	button.appendChild(document.createTextNode("Delete"));
	button.classList="delete";
	li.appendChild(button);
}

let createListElementVillain = ()=> {
  let li = document.createElement("li");
  let button = document.createElement("button");
	li.appendChild(document.createTextNode(inputvillain.value));
	olvillain.appendChild(li);
	inputvillain.value = "";
	button.appendChild(document.createTextNode("Delete"));
	button.classList="delete";
	li.appendChild(button);
}

let addListAfterClickHero =()=> {
  if (inputLengthHero() > 0) {
    if(heroTeamLength()) {
      createListElementHero();
    } else {
      alert("Team can only have at most 7 members");
    }
  }
}

let addListAfterClickVillain = ()=> {
  if (inputLengthVillain() > 0) {
    if(villainTeamLength()) {
      createListElementVillain();
    } else {
      alert("Team can only have at most 7 members");
    }
  }
}

let addListAfterEnterHero = (event) => {
  if (inputLengthHero() > 0 && event.keyCode === 13) {
    if (inputLengthHero() > 0) {
      if(heroTeamLength()) {
        createListElementHero();
      } else {
        alert("Team can only have at most 7 members");
      }
    }
  }
}

let addListAfterEnterVillain = (event) => {
  if (inputLengthVillain() > 0 && event.keyCode === 13) {
    if (inputLengthVillain() > 0) {
      if(villainTeamLength()) {
        createListElementVillain();
      } else {
        alert("Team can only have at most 7 members");
      }
    }
  }
}

let deleteListItem = (event) => {
	if(event.target.className==="delete") {
		event.target.parentNode.remove("li");
	}
}

randomherobutton.addEventListener("click", addRandomHero)

randomvillainbutton.addEventListener("click", createRandomVillain)

buttonhero.addEventListener("click", addListAfterClickHero);

inputhero.addEventListener("keypress", addListAfterEnterHero);

buttonvillain.addEventListener("click", addListAfterClickVillain);

inputvillain.addEventListener("keypress", addListAfterEnterVillain);

body.addEventListener("click", deleteListItem);

/*something for later
function heroPhrase(hero) {
    var phrase;
    switch (hero) {
        case "Spider-Man":
            phrase = "Thwip Thwip Thwip!";
            break;
        case "Iron Man":
            phrase = "Let\'s rock and roll!";
            break;
        case "Thor":
            phrase = "By the Power of Thor!";
            break;
        case "Hulk":
            phrase = "Hulk Smash!!!!!";
            break;
        default:
            whatHappens = "who were you again?";
    }
    alert(phrase);
}
*/
