const inquirer = require('inquirer');
const Enemy = require('./enemy');
const Player = require('./player');


function Game() {
this.roundNumber = 0;

this.isPlayerTurn = false;

this.enemies = [];

this.currentEnemy;

this.player;
}


Game.prototype.initializeGame = function(){
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('goblin', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    this.currentEnemy = this.enemies[0];

    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name Warrior?'
    })
    .then(({name}) => {
        this.player = new Player(name);

        this.startNewBattle();
    })
}
module.exports = Game;