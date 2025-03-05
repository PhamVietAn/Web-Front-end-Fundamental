let num = []
let total = 0
for (let i = 0; i < 5; i++) {
    num[i] = +prompt(`Nhập vào số nguyên thứ ${i+1}`)
    if (Number(num[i]) % 2 !== 0) {
        total++
    }
}
alert(`Số lượng số lẻ trong dãy số vừa nhập là: ${total}\nSố lượng số chẵn trong dãy số vừa nhập là: ${5-total}`)