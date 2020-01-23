var loginform = $("#loginform");
console.log(loginform);
loginform.on('submit', function(event){
    var formData = 'hello';
    event.preventDefault();
    $.ajax({
        type: 'POST',
        url: '../php/login.php',
        data: formData,
        success: function (data) {
            console.log(data);
        },
    });
}); 