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
