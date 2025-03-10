function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],

      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,

          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 16,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
function numPointsScored(player) {
  let object = gameObject();
  for (let team in object) {
    if (object[team].players[player]) {
      return object[team].players[player].points;
    }
  }
  return "Player not found";
}
function shoeSize(player) {
  let object = gameObject();
  for (let team in object)
    if (object[team].players[player]) {
      return object[team].players[player].shoe;
    }
  return "Player not found";
}

function teamColors(teamName) {
  let object = gameObject();
  for (let team in object)
    if (object[team].teamName === teamName) {
      return object[team].colors;
    }
}
function teamNames() {
  let object = gameObject();
  let teamsArray = [];
  for (let team in object) {
    teamsArray.push(object[team].teamName);
  }

  return teamsArray;
}
function playerNumbers(teamName) {
  let object = gameObject();
  let numbersArray = [];
  for (let team in object)
    if (object[team].teamName === teamName) {
      for (let player in object[team].players)
        numbersArray.push(object[team].players[player].number);
    }

  return numbersArray;
}
function playerStats(playerName) {
  let object = gameObject();
  for (let team in object)
    if (object[team].players[playerName]) {
      return object[team].players[playerName];
    }
  return "Player not found";
}
function bigShoeRebounds() {
  let object = gameObject();
  let largestShoeSize = 0;
  let playerWithBiggestShoe = null;

  for (let team in object) {
    for (let player in object[team].players) {
      let currentPlayer = object[team].players[player];

      if (currentPlayer.shoe > largestShoeSize) {
        largestShoeSize = currentPlayer.shoe;
        playerWithBiggestShoe = player;
      }
    }
  }

  return (
    object.home.players[playerWithBiggestShoe]?.rebounds ||
    object.away.players[playerWithBiggestShoe]?.rebounds ||
    "Player not found"
  );
}
function mostPointsScored() {
  let object = gameObject();
  let maxScored = 0;
  let playerwithMaxScored = null;
  for (let team in object) {
    for (let player in object[team].players) {
      let currentPoints = object[team].players[player].points;
      if (currentPoints > maxScored) {
        maxPoints = currentPoints;
        topScorer = player;
      }
    }
  }
  return `${topScorer} scored the most points with ${maxPoints} points.`;
}
function winningTeam() {
  let object = gameObject();
  let highestPoints = 0;
  let teamThatWon = "";

  for (let team in object) {
    let teamPoints = 0;

    for (let player in object[team].players) {
      teamPoints += object[team].players[player].points;
    }

    if (teamPoints > highestPoints) {
      highestPoints = teamPoints;
      teamThatWon = object[team].teamName;
    }
  }

  return `The winning team is ${teamThatWon} with ${highestPoints} points.`;
}
function playerWithLongestName() {
  let object = gameObject();
  let longestName = "";
  let longestPlayer = "";

  for (let team in object) {
    for (let player in object[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
        longestPlayer = player;
      }
    }
  }

  return `The player with the longest name is ${longestPlayer}.`;
}
function doesLongNameStealATon() {
  let object = gameObject();
  let longestName = "";
  let longestPlayer = "";
  let maxSteals = 0;
  let playerWithMostSteals = "";

  for (let team in object) {
    for (let player in object[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
        longestPlayer = player;
      }
    }
  }

  for (let team in object) {
    for (let player in object[team].players) {
      if (object[team].players[player].steals > maxSteals) {
        maxSteals = object[team].players[player].steals;
        playerWithMostSteals = player;
      }
    }
  }

  return longestPlayer === playerWithMostSteals;
}
