let arr=[]
let oldNum = 0
let evenNum = 0
for (let i=0; i<5; i++) {
    arr[i] = +prompt(`Nhập số thứ ${i+1}`)
    if(arr[i]%2!==0){
        oldNum+=arr[i]
    } else {
        evenNum+=arr[i]
    }
}
alert(`Tổng các số chẵn: ${evenNum}\nTổng các số lẻ: ${oldNum}`)