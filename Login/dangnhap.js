function changeButtonColor(button) {
    button.style.backgroundColor = 'red';
    button.style.color = 'white'; // Change text color if needed
}

function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (username === 'lethicuc2503' && password === '25032003') {
        window.location.href = '/indexafter.html'; // Redirect to success page
    } else {
        alert('Tài khoản hoặc mật khẩu không đúng!');
    }
}