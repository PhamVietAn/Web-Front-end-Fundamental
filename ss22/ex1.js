let arr = []
let arrLen = +prompt("Nhap so luong phan tu muon them")
for (let i=0; i<arrLen; i++){
    let index = prompt(`Nhap phan tu thu ${i+1}`)
    arr[i] = index
}
for (let i=0; i<arrLen; i++){
    console.log(arr[i]);
}