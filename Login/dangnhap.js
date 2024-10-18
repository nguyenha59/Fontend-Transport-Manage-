const users = [
    { username: 'U001', password: '123456' },
    { username: 'U002', password: '123456' },
    { username: 'U003', password: '123456' },
    { username: 'U004', password: '123456' },
    { username: 'U005', password: '123456' },
    { username: 'U006', password: '123456' },
    { username: 'U007', password: '123456' },
    { username: 'U008', password: '123456' },
    { username: 'U009', password: '123456' },
    { username: 'U010', password: '123456' },
    { username: 'U011', password: '123456' },
    { username: 'U012', password: '123456' },
    { username: 'U013', password: '123456' },
    { username: 'U014', password: '123456' },
    { username: 'U015', password: '123456' },
    { username: 'U016', password: '123456' },
    { username: 'U017', password: '123456' },
    { username: 'U018', password: '123456' },
    { username: 'U019', password: '123456' },
    { username: 'U020', password: '123456' },
    { username: 'U021', password: '123456' },
    { username: 'U022', password: '123456' },
    { username: 'U023', password: '123456' },
    { username: 'U024', password: '123456' },
    { username: 'U025', password: '123456' },
    { username: 'U026', password: '123456' },
    { username: 'U027', password: '123456' },
    { username: 'U028', password: '123456' },
    { username: 'U029', password: '123456' },
    { username: 'U030', password: '123456' },
    { username: 'U031', password: '123456' },
    { username: 'U032', password: '123456' },
    { username: 'U033', password: '123456' },
    { username: 'U034', password: '123456' },
    { username: 'U035', password: '123456' },
];

// Function to change button color
function changeButtonColor(button) {
    button.style.backgroundColor = 'red';
    button.style.color = 'white'; // Change text color if needed
}

// Handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials against the users array
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        window.location.href = '/indexafter.html'; // Redirect to success page
    } else {
        alert('Tài khoản hoặc mật khẩu không đúng!');
    }
}
