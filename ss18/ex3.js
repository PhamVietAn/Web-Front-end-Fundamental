let username = "ADMIN";
let name = prompt("Nhập tên người dùng");

if (name === username) {
    let passworld = "TheMaster";
    let userPass = prompt("Nhập mật khẩu:");;
    if (userPass === passworld) {
        console.log("Welcome");
    } else if (userPass === '') { 
        console.log('Cancelled');
    } else {
        console.log('Wrong Password');
    }
} else if (name === '') { 
    console.log('Cancelled');
} else {
    console.log("I Don't know you");
}