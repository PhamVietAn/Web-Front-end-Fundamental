let numbers =[2, 5, 7, 4, 1, 8, 6, 2, 5, 7]
let input = +prompt("Nhập một số nguyên bất kì")
let count = 0
for (let i=0; i<10; i++){
    if(input===numbers[i]){
        count++
    }
}
if (count===0) {
    alert(`Số ${input} không tồn tại trong mảng`)
} else {
    alert(`Số ${input} xuất hiện ${count} lần trong mảng`)
}