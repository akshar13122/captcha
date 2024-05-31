function generateCaptcha() {
    const captcha = document.getElementById('captcha');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
    for (let i = 0; i < 6; i++) {
        captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    captcha.innerText = captchaText;
}

function validateCaptcha(event) {
    event.preventDefault();
    const userCaptchaInput = document.getElementById('captchaInput').value;
    const captchaText = document.getElementById('captcha').innerText;
    const result = document.getElementById('result');

    if (userCaptchaInput === captchaText) {
        result.innerText = 'CAPTCHA validated successfully!';
        result.style.color = 'green';
    } else {
        result.innerText = 'Invalid CAPTCHA. Please try again.';
        result.style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    generateCaptcha();
    document.getElementById('captchaForm').addEventListener('submit', validateCaptcha);
});
