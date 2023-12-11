//function refreshCaptcha() {
//    var captchaText = generateCaptcha();
//    document.getElementById('captcha-text').textContent = captchaText;
//}

//function generateCaptcha() {
//    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
//    var captcha = '';

//    for (var i = 0; i < 6; i++) {
//        var randomIndex = Math.floor(Math.random() * chars.length);
//        captcha += chars.charAt(randomIndex);
//    }

//    return captcha;
//}

////function captchacode() {
////    var successmsg = document.getElementById('successmsg');
////    if (userInput !== captchaText) {
////        successmsg.textContent = 'invalid';
////        return false;
////    }
////}

//document.addEventListener('DOMContentLoaded', function () {
//    refreshCaptcha();

//    document.getElementById('captcha-form').addEventListener('submit', function (event) {
//        var userInput = document.getElementById('user-input').value.toUpperCase();
//        var captchaText = document.getElementById('captcha-text').textContent;

//        if (userInput !== captchaText) {
//            alert('!!!CAPTCHA verification failed!!!');
//            event.preventDefault();
//        }
//    });
//    document.getElementById('captcha-form').addEventListener('submit', function (event) {
//        var userInput = document.getElementById('user-input').value.toUpperCase();
//        var captchaText = document.getElementById('captcha-text').textContent;
//        /*var successmsg=document.getElementById('successmsg');*/
//        if (userInput === captchaText) {
//            /*successmsg.textContent='CAPTCHA verified';*/
//            alert('CAPTCHA Verified');
//            event.preventDefault();
//        }
//    });
//});

function refreshCaptcha() {
    var captchaText = generateCaptcha();
    document.getElementById('captcha-text').textContent = captchaText;
}

function generateCaptcha() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    var captcha = '';

    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        captcha += chars.charAt(randomIndex);
    }

    return captcha;
}

//document.addEventListener('DOMContentLoaded', function () {
//    refreshCaptcha();

//    document.getElementById('captcha-form').addEventListener('submit', function (event) {
//        var userInput = document.getElementById('user-input').value.toUpperCase();
//        var captchaText = document.getElementById('captcha-text').textContent;

//        if (userInput !== captchaText) {

//            alert('!!!CAPTCHA verification failed!!!');
//            event.preventDefault();
//        }
//    });
//    document.getElementById('captcha-form').addEventListener('submit', function (event) {
//        var userInput = document.getElementById('user-input').value.toUpperCase();
//        var captchaText = document.getElementById('captcha-text').textContent;

//        if (userInput === captchaText) {

//            alert('CAPTCHA verified');
//            event.preventDefault();
//        }
//    });
//});

document.addEventListener('DOMContentLoaded', function () {
    refreshCaptcha();

    document.getElementById('captcha-form').addEventListener('submit', function (event) {
        var userInput = document.getElementById('user-input').value.toUpperCase();
        var captchaText = document.getElementById('captcha-text').textContent;
        var warningMsg = document.getElementById('warning-msg'); // Reference to the warning message container

        if (userInput !== captchaText) {
            // Update the warning message instead of using alert
            warningMsg.textContent = '!!!CAPTCHA verification failed!!!';
            warningMsg.style.color = 'red'; // You can customize the style as needed
            event.preventDefault();
        } else {
            // Clear the warning message if the verification is successful
            warningMsg.textContent = '';
        }
    });

    document.getElementById('captcha-form').addEventListener('submit', function (event) {
        var userInput = document.getElementById('user-input').value.toUpperCase();
        var captchaText = document.getElementById('captcha-text').textContent;
        var warningMsg = document.getElementById('warning-msg'); // Reference to the warning message container

        if (userInput === captchaText) {
            // Clear the warning message if the verification is successful
            warningMsg.textContent = 'CAPTCHA Verified';
            warningMsg.style.color = 'green';
            event.preventDefault();
        }
    });
});
