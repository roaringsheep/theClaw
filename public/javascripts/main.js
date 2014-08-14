var url = "http://localhost:3000/";

$(document).ready(function() {
    $("#port18").on('click', function() {
        var button = $('#port18');
	var piData = $('#port18').data('state');
	var portNum = button.data('port');

        $(this).data("state", piData == true ? false : true);
        console.log('piData',piData);
        $.ajax({
            type: "POST",
            url: 'http://192.168.1.66:3000',
            data: {
                state: piData,
		port: portNum
            },
            dataType: "text",
            success: function(response) {
                console.log("post route worked. here is response: ", response);
            }
        });
    });
});