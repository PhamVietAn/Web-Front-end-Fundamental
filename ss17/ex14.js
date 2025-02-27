let rad = prompt("Nhập bán kính: ");
let height = prompt("Nhập chiều cao: ");
document.write(`<p>Diện tích xung quanh = ${(2*Math.PI*rad*height).toFixed(1)}</p>`);
document.write(`<p>Diện tích toàn phần = ${(2*Math.PI*rad*(height + rad)).toFixed(1)}</p>`)
document.write(`<p>Thể tích hình trụ = ${(Math.PI*rad*rad*height).toFixed(1)}</p>`)
document.write(`<p>Chu vi đáy = ${(2*Math.PI*rad).toFixed(1)}</p>`)
