let num = []
let total = 0
for (let i = 0; i < 5; i++) {
    num[i] = +prompt(`Nhập vào số nguyên thứ ${i+1}`)
    if (Number(num[i]) % 2 !== 0) {
        total += num[i]
    }
}
alert(`Tổng các số lẻ trong dãy số vừa nhập là: ${total}`)