//this is an if/else statement
//if is the keyword that tells JavaScript to start the conditional
//(7 < 10) is the condition to test
//{} contains the code block; this is what JavaScript will run

if (7 < 10) {
    console.log (true);
//this will only occur if the statement is false
} else {
    console.log(false);
}

if (71 < 10) {
    console.log (true);
//this will only occur if the statement is false
} else {
    console.log(false);
}

//take the original statement and make it false


//An if/else if/else statement adds a third code block for JavaScript to execute


let x = 10

if (x < 10) {
    console.log (true);
} else if (x > 10) {
    console.log (false);
} else {
    console.log("x is equal to 10");
}

//complete the exercise below

function hobbies() {

//     //create a variable for "newHobby"
    let newHobby;
    let randomNum = Math.floor(Math.random()* 10);

    //Math.random randomly selects a number that fulfills these conditions: 0 < x < 1
    //Math.floor returns the largest integer less than or equal to a given number
    if (randomNum < 3) {
        newHobby = "yoga";
        console.log("your new hobby is " + newHobby);
    } else if (randomNum > 6) {
        newHobby = "running";
        console.log("your new hobby is " + newHobby );
    } else {
        console.log("you don't get a new hobby");
    }

};
hobbies();

//You want to create a function that randomly decides what movie you will go to see
//create an if/else if/else statement that utilizes math.random and math.floor to decide between 3 movies
let num = Math.floor(Math.random()* 10);
//create a function for your movieChoice
movieChoice();
//create a variable, but do not set it equal to anything
let movie;
//start your if else statement

function movieChoice(){
    if (num < 5) {
    movie = "Tangled";
    console.log("watch " + movie);
    } else if (num > 7) {
    movie = "Lilo and Stitch";
    console.log("watch " + movie);
    } else {
    movie = "World War Z";
    console.log("watch " + movie);
    }
}
//set your variable = to a movie

//console.log that movie

//repeat for else if

//repeat for else


