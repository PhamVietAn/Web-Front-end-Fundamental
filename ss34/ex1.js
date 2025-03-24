function submitForm(e) {
    e.preventDefault()

    register()
    
}

function register() {
    let addEmail = document.getElementById("addEmail").value.trim()
    let password = document.getElementById("password").value.trim()
    let confirmPass = document.getElementById("confirmPass").value.trim()
    let message = document.getElementById("message")

    if (!addEmail || !password || !confirmPass) {
        message.style.color = "red";
        message.textContent = "Bắt buộc!";
        return;
    }
    if (password !== confirmPass) {
        message.style.color = "red";
        message.textContent = "Mật khẩu không khớp!";
        return;
    }
    
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.email === addEmail)) {
        message.style.color = "red";
        message.textContent = "Email đã được đăng ký!";
        return;
    }
    
    users.push({ email: addEmail, password });
    localStorage.setItem("users", JSON.stringify(users));
    message.style.color = "green";
    message.textContent = "Đăng ký thành công!";
}
