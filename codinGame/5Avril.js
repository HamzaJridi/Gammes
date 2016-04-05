//Puzzle : La Descente

// game loop
while (true) {
    var max1 = 0;
    var max2 = 0;
    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); // represents the height of one mountain, from 9 to 0. Mountain heights are provided from left to right.
        if (mountainH > max1) {
            max1 = mountainH;
            max2 = i;
        }
    }

    print(max2);
}

