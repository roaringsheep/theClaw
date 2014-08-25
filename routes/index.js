var express = require('express');
var router = express.Router();
// var gpio = require('pi-gpio');

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
    var ports = "";
    for (var i = 0; i < portsArr.length - 1; i + 2) {
        var port = Number(portsArr[i]);
        // gpio.open(port, "output", function(err) {
        //     if (portsArr[i + 1] == 'on') {
        //         gpio.write(port, 1, function() {
        //             gpio.close(port);
        //         });
        //     } else if (portsArr[i + 1] == 'off') {
        //         gpio.write(port, 0, function() {
        //             gpio.close(port);
        //         });
        //     }
        // });
        if (i == portsArr.length - 2) {
            ports += portsArr[i] + ',' + portsArr[i + 1] + ',';
        }
        ports += portsArr[i] + ',' + portsArr[i + 1];
    }
    res.send(200, {
        ports: ports
    });
});


module.exports = router;
