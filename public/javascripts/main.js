var url = "http://localhost:3000/";

$(document).ready(function() {
    $("#pi").on('click', function() {
        var piData = $('#pi').data('state');
        $(this).data("state", piData == true ? false : true);
        console.log(piData);

        $.ajax({
            type: "POST",
            url: url,
            data: {
                state: piData
            },
            dataType: "text",
            success: function(response) {
                console.log("post route worked. here is response: ", response);
            }
        });
    });
})