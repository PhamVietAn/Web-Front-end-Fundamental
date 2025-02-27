let rad = prompt("Nhập bán kính của hình cầu:");
document.write(`<p>Thể tích hình cầu = ${((3/4)*Math.PI*rad**3).toFixed(1)}</p>`)
document.write(`<p>Diện tích bề hình cầu = ${(4*Math.PI*rad**2).toFixed(1)}</p>`)
document.write(`<p>Chu vi hình cầu = ${(2*Math.PI*rad).toFixed(1)}</p>`)
