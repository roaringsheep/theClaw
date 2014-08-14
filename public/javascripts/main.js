var url = "http://localhost:3000/";

// var Button = function(port) {
//     this.state = false;
//     this.id = "#port" + port;
//     this.port = port;
// };

// Button.prototype.post = function(button) {
//     var el = this.id;
//     $(el).on('click', function() {
//         var button = $(el);
//         var piData = $(el).data(this.state);
//         var portNum = button.data(this.port);

//         $(this).data("state", piData == true ? false : true);
//         console.log('piData', piData);
//         $.ajax({
//             type: "POST",
//             url: 'http://192.168.1.66:3000' || url,
//             data: {
//                 state: piData,
//                 port: portNum
//             },
//             dataType: "text",
//             success: function(response) {
//                 console.log("post route worked. here is response: ", response);
//             }
//         });
//     });
// };

var post = function() {
    var btn = $(id);
    var port = btn.data('port');
    var status = btn.data('state');
    $(this).data("state", status == 'on' ? 'off' : 'on');
    $.ajax({
        type: "POST",
        url: 'http://192.168.1.66:3000' || url,
        data: {
            state: status,
            port: port
        },
        dataType: "text",
        success: function(response) {
            console.log("post route worked. here is response: ", response);
        }
    });
};


var makeBtn = function(port) {
    return '<button data-state="off" data-port='port' id="port+'port'">Port+'port'</button>';
}

//populate a set of buttons with portnumber array
var populateBtn = function(arr) {
    for (var i = 0; i <= arr.length; i++) {
        var id = '#port' + arr[i];
        $('body').append(makeBtn(arr[i]));
        $(id).on('click', function() {
            post();
        });
    };
};

var portArray = [22,18,16,15,13, 11, 12, 7];

$(document).ready(function() {
    //run post method for each button instance
    populateBtn(portArray);
});