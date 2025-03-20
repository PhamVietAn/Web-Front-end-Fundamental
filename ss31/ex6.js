function login() {
    let correctUsername = "huanrose@gmail.com";
    let correctPassword = "123456";
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if (username === correctUsername && password === correctPassword) {
        console.log('Đăng nhập thành công');
    } else {
        console.log('Đăng nhập thất bại');
    }
}