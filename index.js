
// Dependencies
var https = require('https');
var fs = require('fs');
var path = require('path');

// Variables
var startingBlock = 434300; // 2016-10-15 23:23:24
var endingBlock = 440000; // 2016-11-22 01:25:04
var currentBlock = 0;
var initialLength = endingBlock - startingBlock;

// We must store all the block numbers in an array…
var list = [];
for (var i = startingBlock; i < endingBlock; i++) {
  list.push(i);
}

// … So that we can go through them randomly.
list = shuffleArray(list);

function iterate() {

  // Check so that the list isn't completed.
  if (list.length >= 0) {
    console.log('');
    console.log(String(currentBlock + 1) + '/' + String(initialLength + 1));
    console.log('Attempting to get block #' + list[0]);

    https.request({
      host: 'blockchain.info',
      path: '/block-height/' + list[0] + '?format=json',
      method: 'GET'
    }, function(res) {
      var body = [];
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        body.push(chunk);
      });
      res.on('end', function() {
        console.log('Success! Writing file.');
        // var parsedBody = JSON.parse(body);
        fs.writeFile("./output/" + list[0] + '.json', body, function(err) {
            if(err) { return console.log(err); }
            console.log("The file was saved!");
            list.shift();
            iterate();
        });
      });
      res.on('error', function(error) {
        console.log(error);
      });
    }).end();

  } else {
    console.log("** All blocks done **");
  }

}

// Shuffle

function shuffleArray(array) {

    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}


// Start it!

iterate();
