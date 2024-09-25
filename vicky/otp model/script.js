document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the input value (phone number or email)
    const loginInput = document.getElementById('loginInput').value;

    // Basic validation
    if (loginInput) {
        // Simulate sending OTP
        alert('OTP has been sent to ' + loginInput);

        // Hide login form and show OTP form
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('otpForm').classList.remove('hidden');

        // Start OTP resend timer
        startResendTimer(30);
    } else {
        alert('Please enter a valid phone number or email ID.');
    }
});

document.getElementById('otpForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the OTP input value
    const otpInput = document.getElementById('otpInput').value;

    // Simulate OTP verification
    if (otpInput === '123456') { // Example OTP (replace with real OTP verification)
        alert('OTP verified successfully!');

        // Redirect to price comparison page
        window.location.href = 'comparison.html';
    } else {
        alert('Invalid OTP. Please try again.');
    }
});

// Function to handle resend OTP button and timer
function startResendTimer(seconds) {
    const resendBtn = document.getElementById('resendBtn');
    const timerDisplay = document.getElementById('timer');
    
    resendBtn.disabled = true;
    timerDisplay.textContent = `You can resend OTP in ${seconds} seconds.`;
    
    const countdown = setInterval(function () {
        seconds--;
        timerDisplay.textContent = `You can resend OTP in ${seconds} seconds.`;

        if (seconds <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = '';
            resendBtn.disabled = false;
        }
    }, 1000);

    resendBtn.addEventListener('click', function () {
        alert('OTP has been resent!');
        startResendTimer(30);  // Restart the timer for 30 seconds after resending OTP
    });
}
