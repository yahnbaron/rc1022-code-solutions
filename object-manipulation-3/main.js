/* first we initialize the deck as a new array and the card indices as each face value of the cards
  inside of an array. Then we declare the four suits inside an array and then make
  a new array that holds all 4 player objects
  then we create the createdeck function as a loop to go through every card index
  and loop through the 4 suits assigning each card an index and suit along with a numerical value
  Then, we shuffle the deck with the shuffle function by swapping each card with another in a random location
  after that, we make the deal function to loop twice for each player and remove one card from the deck and push to each hand
  then we calculate score by looping through each player andadding the real value of their cards together
  and update the value of their score to the sum. Finally, we make the whoWon function
*/
console.log('here we go');
var deck = [];
var indices = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
var players = [
  {
    name: 'player1',
    hand: [],
    score: 0
  },
  {
    name: 'player2',
    hand: [],
    score: 0
  },
  {
    name: 'player3',
    hand: [],
    score: 0
  },
  {
    name: 'player4',
    hand: [],
    score: 0
  }
];

function createDeck() {
  deck = [];
  for (var i = 0; i < indices.length; i++) {
    for (var x = 0; x < suits.length; x++) {
      if (indices[i] < 11) {
        var value = parseInt(indices[i]);
      } else if (indices[i] === 'A') {
        value = 11;
      } else {
        value = 10;
      }
      var card =
      {
        Index: indices[i],
        Suit: suits[x],
        Value: value
      };
      deck.push(card);
    }
  }
}

function shuffle() {
  for (var i = deck.lenth - 1; i > 0; i--) {
    var y = Math.floor(Math.random() * i);
    var temp = deck[i];
    deck[i] = deck[y];
    deck[y] = temp;
  }
}

function deal() {
  for (var i = 0; i < 2; i++) {
    for (var x = 0; x < players.length; x++) {
      var card = deck.pop();
      players[x].hand.push(card);
    }
  }
}

function calcScore() {
  for (var y = 0; y < players.length; y++) {
    players[y].score = players[y].hand[0].Value + players[y].hand[1].Value;
  }
}

function whoWon() {
  var highScore = 0;
  var player = '';
  for (var z = 0; z < players.length; z++) {
    if (players[z].score > highScore) {
      highScore = players[z].score;
      player = players[z].name;
    }
  }
  return 'Winner is ' + player + ' with a score of ' + highScore;
}

createDeck();
shuffle();
deal();
calcScore();
whoWon();
console.log('here we go');
