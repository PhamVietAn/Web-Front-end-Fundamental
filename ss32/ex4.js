document.getElementById("checkEmail").addEventListener("click", function() {
    let email = document.getElementById("emailInput").value.trim();
    let result = document.getElementById("result");

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;

    if (emailPattern.test(email)) {
        result.textContent = "Email hợp lệ!";
        result.style.color = "green";
    } else {
        result.textContent = "Email không hợp lệ!";
        result.style.color = "red";
    }
});