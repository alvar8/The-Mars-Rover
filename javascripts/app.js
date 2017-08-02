//
var rover = {
  direction: "N",
  x: 4,
  y: 5,
  travelLog: [4,5],

}

var rover2 = {
  direction:"N",
  x: 8,
  y: 8,
  travelLog: [0,0],

}

var grid = [
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','O','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','O','','',''],
  ['','','','','rover','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','O','','',''],
  ['','','','','','','','','r2',''],
  ['','','O','','O','','','','','']


];



// ======================

// ======================



function turnLeft(rover){
  console.log("turnLeft was called!");

  switch(rover.direction) {
    case 'N':
      rover.direction = "W";
      console.log("The rover is facing West");
      break;
    case 'W':
      rover.direction = "S";
      console.log("The rover is facing South");
      break;
    case 'S':
      rover.direction = "E";
      console.log("The rover is facing East");
      break;
    case 'E':
      rover.direction = "N";
      console.log("The rover is facing North");
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");

  switch(rover.direction) {
    case 'N':
      rover.direction = "E";
      console.log("The rover is facing East");
      break;
    case 'W':
      rover.direction = "S";
      console.log("The rover is facing South");
      break;
    case 'S':
      rover.direction = "W";
      console.log("The rover is facing West");
      break;
    case 'E':
      rover.direction = "N";
      console.log("The rover is facing North");
      break;
  }

}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      if(rover.y===0){
        console.log("You can't go out of the planet");
      }else if(grid[rover.y--][rover.x]==="O" || grid[rover.y][rover.x]=== "r2"){
        console.log("Careful! There is an obstacle. Try other way.");
      }else{
        console.log(rover.x,rover.y);
        rover.travelLog.push(rover.x,rover.y);
      }

      break;
    case "S":
      if(rover.y===9){
        console.log("You can't go out of the planet");
      }else if(grid[rover.y++][rover.x]==="O" || grid[rover.y][rover.x]=== "r2"){
        console.log("Careful! There is an obstacle. Try other way.");
      }else{
        console.log(rover.x,rover.y);
        rover.travelLog.push(rover.x,rover.y);
    }
      break;
    case "W":
      if(rover.x===0){
        console.log("You can't go out of the planet");
      }else if(grid[rover.y][rover.x--]==="O" || grid[rover.y][rover.x]=== "r2"){
        console.log("Careful! There is an obstacle. Try other way.");
      }else{
        console.log(rover.x,rover.y);
        rover.travelLog.push(rover.x,rover.y);
      }
      break;
    case "E":
      if(rover.x===9){
        console.log("You can't go out of the planet");
      }else if(grid[rover.y][rover.x++]==="O" || grid[rover.y][rover.x]=== "r2"){
        console.log("Careful! There is an obstacle. Try other way.");
      }else{
        console.log(rover.x,rover.y);
        rover.travelLog.push(rover.x,rover.y);
      }
    default:

  }
  newPlace();
}

function moveBackward(rover){
  console.log("moveBackward was called");

  switch (rover.direction) {
    case "N":
      if(rover.y===9){
        console.log("You can't go out of the planet");
      }else if(grid[rover.y++][rover.x]==="O" || grid[rover.y][rover.x]=== "r2"){
        console.log("Careful! There is an obstacle. Try other way.");
      }else{
        rover.travelLog.push(rover.x,rover.y);
      }

      break;
    case "S":
      if(rover.y===0){
        console.log("You can't go out of the planet");
      }else if(grid[rover.y--][rover.x]==="O" || grid[rover.y][rover.x]=== "r2"){
        console.log("Careful! There is an obstacle. Try other way.");
      }else{
        rover.travelLog.push(rover.x,rover.y);
    }
      break;
    case "W":
      if(rover.x===9){
        console.log("You can't go out of the planet");
      }else if(grid[rover.y][rover.x++]==="O" || grid[rover.y][rover.x]=== "r2"){
        console.log("Careful! There is an obstacle. Try other way.");
      }else{
        rover.travelLog.push(rover.x,rover.y);
      }
      break;
    case "E":
      if(rover.x===0){
        console.log("You can't go out of the planet");
      }else if(grid[rover.y][rover.x--]==="O" || grid[rover.y][rover.x]=== "r2"){
        console.log("Careful! There is an obstacle. Try other way.");
      }else{
        rover.travelLog.push(rover.x,rover.y);
      }
    default:

  }
  newPlace();
}//se cierra moveBackward

function move(commands){

  for(i=0;i<commands.length;i++){

    switch (commands[i]) {
      case 'f':
        moveForward(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'b':
      moveBackward(rover);
      default:


    }
  }
  console.log(rover.travelLog);
  }

function newPlace(){
  for(var i=0; i<grid.length; i++){
    for(var j=0; j<grid.length; j++){
      if(grid[i][j]==='rover'){
        grid[i][j] = '';
      }
    }
  }
  grid[rover.x][rover.y]= 'rover';
};
