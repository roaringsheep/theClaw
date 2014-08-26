var express = require('express');
var router = express.Router();
var gpio = require('pi-gpio');

[7, 11, 12, 13, 15, 16, 18, 22].forEach(function(portNum) {
  gpio.open(portNum, "output", function(err) {
    if(err) console.log("Error opening", port, err);
    console.log("Opened port", portNum);
  });
});


/* GET home page. */

router.get('/', function(req, res) {
    // console.log("req.body", req.body);
    res.render('index', {
        title: 'pi',
        state: ""
    });
});

router.post('/', function(req, res) {
    console.log('really poked');
    console.log('req.body', req.body);
    var portsArr = req.body.ports.split(',');

    function processPort(portArray, callback) { 
        var port = Number(portArray.shift());
        var onOff = portArray.shift();
        var onVal = onOff === "on" ? 1 : 0;
        console.log("Turning", port, "to status", onOff);
            gpio.write(port, onVal, function(err) {
                console.log("Error on write:", err);
 //               gpio.close(port);
                if(portArray.length > 1) {
                    setTimeout(function() {
			    processPort(portArray, callback);
                    }, 50);
                } else {
                    callback();
                }
            });
    }

    processPort(portsArr, function() {
        res.json({
            ports: req.body
        });
    });
});

module.exports = router;
