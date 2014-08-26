var url = "http://localhost:3000/";

var post = function(id) {
    var btn = $(id);
    var port = btn.data('port');
    var status = btn.data('state');
    btn.data("state", status == 'on' ? 'off' : 'on');
    $.ajax({
        type: "POST",
        url: 'http://192.168.1.66:3000' || url,
        data: {
          "ports": port.toString() + "," + status.toString()
        },
        dataType: "text",
        success: function(response) {
            console.log("post route worked. here is response: ", response);
        }
    });
};


var makeBtn = function(port) {
    return '<button data-state="off" data-port='+'"'+port+'"'+' id="port'+port+'">Port' + port +'</button>';
};

//populate a set of buttons with portnumber array
var populateBtn = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var id = '#port' + arr[i];
	var btn = makeBtn(arr[i]);
        $('#buttons').append(btn);
        (function(id) {
         $(id).on('click', function() {
	    console.log('button clicked! id: ',id);
            post(id);
        });
        })(id);
    };
};

var portArray = [22,18,16,15,13, 11, 12, 7];

$(document).ready(function() {
    //run post method for each button instance
    populateBtn(portArray);
});
