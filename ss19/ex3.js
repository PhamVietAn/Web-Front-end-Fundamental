let choice = +prompt("Nhập lựa chọn của bạn:\n1: VND -->USD\n2: USD --> VND");
let monney;
switch (choice) {
    case 1:
        monney = +prompt("Nhập số tiền muốn chuyển đổi:"); 
        alert(`${monney/23000} USD`)
        break;
    
    case 2:
        monney = +prompt("Nhập số tiền muốn chuyển đổi:"); 
        alert(`${monney*23000} VND`)
        break;

    default:
        alert(`Lựa chọn không hợp lệ`)
        break;
}