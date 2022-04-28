"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = game.players[0];
console.log("task 2", gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log("AllPlayers", allPlayers);
const players1Final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

function printGoals(...players) {
  for (let player of players) {
    console.log(player);
  }
  console.log(`${players.length} goal were scored.`);
}
printGoals(...players1);
printGoals("Lewandowski", "Gnarby", "Lewandowski", "Hummels");
printGoals(...game.scored);

team1 < team2 && console.log("Team 2 is more likely to win");
//Looping over array and object
for (const [i, name] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${name}`);
}

let sum = 0;
for (const i of Object.values(game.odds)) {
  sum += i;
}
console.log(sum / Object.values(game.odds).length);

for (const [team, score] of Object.entries(game.odds)) {
  const teamName = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamName} : ${score}`);
}

//Creating object based on array
const scores = {};
for (const player of game.scored) {
  scores[player] ? (scores[player] += 1) : (scores[player] = 1);
}
console.log(scores);
