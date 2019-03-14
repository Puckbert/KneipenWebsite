var body_message = //Edit
var email = 'Aleeex.bh@gmail.com';
var subject = 'Neue Kneipe';
$('button').click(function() {

    var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_message;

    win = window.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed) win.close();

});
