function submitForm(e) {
    e.preventDefault(); // Ngăn form load lại trang

    login();
}

function login() {
    let email = document.getElementById('addEmail').value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Email và Password không được để trống!");
        return;
    }

    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = storedUsers.find(user => user.email === email && user.password === password);

    if (validUser) {
        alert("Đăng nhập thành công!");
        window.location.href = "ex3.html";
    } else {
        alert("Email hoặc Password không đúng!");
    }
}
