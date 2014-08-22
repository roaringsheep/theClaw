var express = require('express');
var router = express.Router();
var gpio = require('pi-gpio');

/* GET home page. */

router.get('/', function(req, res) {
  // console.log("req.body", req.body);
  res.render('index', { title: 'pi', state: "" });
});

router.post('/', function(req, res) {
    console.log("req.body.state:", req.body.state, 'req.body.port', req.body.port);
    var port = Number(req.body.port);
    gpio.open(port, "output", function(err) {
	if(req.body.state == 'on'){
	    gpio.write(port ,1,  function() {
		gpio.close(port);
	    });
	} else {
	    gpio.write(port,0, function() {
		gpio.close(port);
	    });
	}
    });
    res.send(200, {state: req.body.state, port: req.body.port});
});




module.exports = router;