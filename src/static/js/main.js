$(document).ready(function () {

    // Add the following code if you want the name of the file appear on select
    $(".custom-file-input").change(function () {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });



    $('#upload-file').submit(function (event) {
        console.log(document.getElementById('scname').textContent)
        // localStorage.setItem('name', document.getElementById('scname'))
        // localStorage.setItem('id', document.getElementById('scid'))
        // localStorage.setItem('location', document.getElementById('sclocation'))
        // localStorage.setItem('gender', document.getElementById('scgender'))
        // localStorage.setItem('age', document.getElementById('scage'))

        if (document.getElementById("customFile").files.length == 0) {
            event.preventDefault();
            alert("Please select a file before submit");
        }
    });

    $('#submit-url').submit(function (event) {
        //alert("Please enter image URL before submit");
        if (document.getElementById("url-input").value == "") {
            event.preventDefault();
            alert("Please enter image URL before submit");
        }
    });


    /*
        $('#btn-predict').click(function () {
            var form_data = new FormData($('#upload-file')[0]);
            //console.log('Success!');
            if (document.getElementById("customFile").files.length == 0) {
                alert("Please enter a numeric value");
                console.log("no files selected");
            }
            
            $.ajax({
                type: 'POST',
                url: '/upload',
                data: form_data,
                contentType: false,
                cache: false,
                processData: false,
                async: true,
                success: function (data) {
                    // Get and display the result
                    //$('.loader').hide();
                    //$('#result').fadeIn(600);
                    //$('#result').text(' Model Predict the Water as:  ' + data);
                    console.log('Success!');
                },
            });
            
        });
        
    */
});
