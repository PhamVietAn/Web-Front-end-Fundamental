let dolar = +prompt("Nhập tiền đô:");
let vnd = dolar*25000;
document.write(`${dolar}$ = ${vnd.toLocaleString()} đ`);