//we are going to create a mini game in javascript for rolling dice
//create a function called diceGame
function diceGame() {
    
    //create a variable called dice1 that will con;tain a random number from 1-10 
    //Use Math.floor and Math.random to create this number

    let dice1 = Math.floor(Math.random()*10);

    //create a variable called dice2 that will contain a random number from 1-10 
    //Use Math.floor and Math.random to create this number
    let dice2 = Math.floor(Math.random()*10);
   
    firstRoll();
    secondRoll();
    //create a function for your first roll
    function firstRoll() {
    
        //start an if then statement that sets conditions for dice1
        if (dice1 < 6){
            console.log("winner");
        } else {
            console.log("loser");
        }
        //console.log 'winner' if it meets the conditions
           
        //use the else portion to console log 'loser'
        
        
    }

    //create a function for your second roll
    function secondRoll() {
        //start an if then statement that sets conditions for dice2
        if (dice2 < 6){
            console.log("winner");
        } else {
            console.log("loser");
        }
            //console.log 'winner' if it meets the conditions
           
            //use the else portion to console log 'loser'
      
      
    }

    //make sure to call your functions for first roll and second roll
    
}

//Call the diceGame function
diceGame();

//you should have a working protype of a dice roll game.
//you can make changes as needed to improve upon your game.
