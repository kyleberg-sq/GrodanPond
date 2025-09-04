const deck = createDeck();
const players = [];
const Fire = [];
const handSize = 9;
const cardA = [0, 30, 70, 120, 180, 200];
const card2 = [0, 5, 20, 40, 70, 200];
const card3 = [0, 10, 30, 60, 100, 200];
const card4 = [0, 10, 30, 60, 100, 200];
const card5 = [0, 10, 30, 60, 100, 200];
const card6 = [0, 10, 30, 60, 100, 200];
const card7 = [0, 10, 30, 60, 100, 200];
const card8 = [0, 10, 30, 60, 100, 200];
const card9 = [0, 10, 30, 60, 100, 200];
const card10 = [0, 10, 30, 60, 100, 200];
const cardJ = [0, 30, 50, 90, 140, 200];
const cardQ = [0, 30, 50, 90, 140, 200];
const cardK = [0, 30, 50, 90, 140, 200];



// Function to add a player
function addPlayer(name) {
  players.push(new player(name));
}

// Function to deal cards to players
function cardDealing() {
  for(let player of players) {
    for(let i = 0; i < 10; i++) {
      player.drawCard();
    }
  }
}

// Player constructor function
function player(name) {
  this.name = name;
  this.hand = [];
  this.drawCard = function() {
    this.hand.push(deck.pop());
  };
  this.throwCard = function(card){
    Fire.push(card);
  };
  this.pairs = [];
  this.totalScore = 0;
  this.negativeNum = -1;
  this.negativeCount = 5 * this.negativeNum;
};

// Create a new deck of cards
function createDeck() {
  const suits = ['S', 'H', 'D', 'C', 'S', 'H', 'D', 'C'];
  const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K','A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  let deck = [];
  for (let s of suits) {
    for (let r of ranks) {
      deck.push(r + s);
    }
  }
  return deck.sort(() => Math.random() - 0.5);
}