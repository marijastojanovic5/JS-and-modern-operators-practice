'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//const team1 = game.players[0];
//const team2 = game.players[1];
const [player1, player2] = game.players;

const [gk, ...fieldPlayers] = player1;
const [gk1, ...fieldPlayers1] = player2;

const allPlayers = [...player1, ...player2];

const playersFinal = [...player1, 'Thiago', 'Coutihno', 'Perisic'];

//const team1 = game.odds.team1;
//const team2 = game.odds.team2;
//const draw = game.odds.x;

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

team1 < team2 && console.log('team 1 is more lakely to win');
team1 > team2 && console.log('team 2 is more lakely to win');
