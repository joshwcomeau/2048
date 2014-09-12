angular.module('Game', [])
.service('GameManager', function() {
  
  // Start a new game, or restart
  this.newGame = function() {};

  // Handle a single move event
  this.move = function() {};

  // Update score
  this.updateScore = function() {};

  // Check if there are any moves left (is the game over?)
  this.movesAvailable = function() {};
});