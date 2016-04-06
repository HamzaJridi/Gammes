//Puzzle "Le pouvoir de Thor"


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position
var x = initialTX;
var y = initialTY;

// game loop
while (true) {
    var remainingTurns = parseInt(readline());

    var dirx = "";
    var diry = "";
    
    if (x > lightX) {
        dirx = "W";
        x--;
    } else if (x < lightX) {
        dirx = "E";
        x++;
    }

    if (y > lightY) {
        diry = "N";
        y--;
    } else if (y < lightY){
        diry = "S";
        y++;
    }    

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    print(diry + dirx); // A single line providing the move to be made: N NE E SE S SW W or NW
}
