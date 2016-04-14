//Températures

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline().split(' '); // the n temperatures expressed as integers ranging from -273 to 5526


printErr(temps);
printErr(n);
// Write an action using print()
// To debug: printErr('Debug messages...');

var tmpValp = temps[0];
var tmpValn = temps[0];
	  if(n !== 0){
	  	for(i=1;i<n;i++){
    			if(temps[i] > 0 && temps[i] < Math.abs(tmpValp)){
       				tmpValp = temps[i]
       
    			}
    			else if(temps[i] < 0 && Math.abs(temps[i]) < Math.abs(tmpValn)){
        			tmpValn = temps[i];
    			}
	  	}
	  	
		if(Math.abs(tmpValp) === Math.abs(tmpValn)){print(tmpValp);}
		else if (Math.abs(tmpValp) > Math.abs(tmpValn)){print(tmpValn);}
		else if (Math.abs(tmpValp) < Math.abs(tmpValn)){print(tmpValp);}
	}else{
	
    		print(0);
	}

