/*
 *  Author: Isola Tong <isotong@ucsc.edu>
 *  Created: 19 October
 *  License: Public Domain
 */

 // Define Variables
myTransport = ["Toyota Camry", "bus", "train"
    ];

myMainRide = {
    make: "Toyota",
    model: "Camry",
    year: 1998,
    age: function() {
        return 2019 - age;
    }
}

 // Output
 document.writeln("Kinds of transportation I use: ", myTransport)
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
