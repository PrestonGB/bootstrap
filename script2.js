/*var database = [
  {
    username: "Preston",
    password: "preston",
  },
  {
    username: "Marilee",
    password: "salielit1",
  },
  {
    username: "Petra",
    password: "gracie",
  }

];

var newsFeed = [
  {
    username: "bobby",
    timeline: "so sleepy dog",
  },
  {
    username: "tammy",
    timeline: "wassssssupppp",
  },
  {
    username: "donny",
    timeline: "mesohoney",
  }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function isUserValid(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (user === database[i].username && pass === database[i].password) {
      return true;
    }
  } return false;
}

function signIn(user, pass) {
  if (isUserValid(user, pass) === true) {
    console.log(newsFeed);
  } else {
    alert("incorrect login");
  }
}

signIn(userNamePrompt, passwordPrompt);

var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy"
];

for (var i = 0; i < todos.length; i++) {
  todos[i] = todos[i]+ "!";
}

todos.forEach(function(i) {
  console.log(i);
})
