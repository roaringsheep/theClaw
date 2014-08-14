var gpio = require('pi-gpio');

var port = 18;
gpio.open(port, "output", function(err) {

  gpio.write(port,0,  function() {

    gpio.close(port);
  });
});

var readport = 22;
function readPort() {
gpio.open(readport, "input", function(err) {
  gpio.read(readport, function(err, value) {
    console.log("READ from 22", value);
    gpio.close(readport);
  });
});
}

setInterval(readPort, 1000);

