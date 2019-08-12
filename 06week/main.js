const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  }
];

const listofPlayers = [];
const blueTeam = [];
const redTeam = [];

class Player {
  constructor(person) {
    this.person = person;
    this.isPlayer = false;
    this.color = null;
  }
}

class BlueTeammate extends Player {
  constructor(player) {
    super(player.person);
    this.color = "blue";
  }
}

class RedTeammate extends Player {
  constructor(player) {
    super(player.person);
    this.color = "red";
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById("people");
  listElement.innerHTML = "";
  arrOfPeople
    .filter(person => !person.isPlayer)
    .map(person => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.innerHTML = "Make a Player";
      button.addEventListener("click", function() {
        makePlayer(person.id);
      });
      li.appendChild(button);
      li.appendChild(
        document.createTextNode(person.name + " - " + person.skillSet)
      );
      listElement.append(li);
    });
};

function makePlayer(id, skillSet) {
  arrOfPeople.forEach((person, index) => {
    if (person.id === id) {
      let newplayer = new Player(person);
      listofPlayers.push(newplayer);
      newplayer.isPlayer = true;
      arrOfPeople.splice(index, 1);
      listPlayer();
      listPeopleChoices();
    }
  });
}

function listPlayer() {
  document.getElementById("players").innerHTML = "";
  listofPlayers.map(player => {
    const listPlayerEle = document.getElementById("players");
    const li = document.createElement("li");
    const redButton = document.createElement("button");
    redButton.innerHTML = "Red Team";
    const xButton = document.createElement("button");
    xButton.innerHTML = "X";
    xButton.addEventListener("click", function() {
      xButton.remove();
      li.remove();
    });

    redButton.addEventListener("click", function() {
      redteam(player.person.id.name);
    });

    li.appendChild(redButton);

    const blueButton = document.createElement("button");
    blueButton.innerHTML = "Blue Team";
    blueButton.addEventListener("click", function() {
      blueteam(player.person.id);
    });

    li.appendChild(blueButton);
    li.appendChild(document.createTextNode(player.person.name));
    li.appendChild(xButton);
    console.log(li, "test");
    listPlayerEle.append(li);
  });
}

function blueteam(id) {
  document.getElementById("blue").innerHTML = "";
  listofPlayers.map(player => {
    const listPlayerEle = document.getElementById("blue");
    const li = document.createElement("li");
    const xButton = document.createElement("button");
    xButton.innerHTML = "X";
    xButton.addEventListener("click", function() {
      xButton.remove();
      li.remove();
    });
    li.appendChild(document.createTextNode(player.person.name));
    li.appendChild(xButton);
    listPlayerEle.append(li);
  });
}

function redteam(id) {
  document.getElementById("red").innerHTML = "";
  listofPlayers.map(player => {
    const listPlayerEle = document.getElementById("red");
    const li = document.createElement("li");
    const xButton = document.createElement("button");
    xButton.innerHTML = "X";
    xButton.addEventListener("click", function() {
      xButton.remove();
      li.remove();
    });
    li.appendChild(document.createTextNode(player.person.name));
    li.appendChild(xButton);
    listPlayerEle.append(li);
  });
}

//   blueTeam.push(listofPlayers[id - 2]);
// const li = document.createElement("li");
//   blueteam.map(player => {
//     const blueRoster = document.createElement("li");
//     blueRoster.append(li);
//     console.log(blueRoster);
//   });
// }
