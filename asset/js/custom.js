// toggle hidden password
$('.toggle-password').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('fa-eye fa-eye-slash');
    var password = $('#password');
    password.attr('type') == 'password' ?  password.attr('type', 'text') :  password.attr('type', 'password');
});

