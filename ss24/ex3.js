
let choice
let arr = []
let n = 0
let newArr = []
do {
    choice = +prompt("    1.Nhập mảng\n    2.Hiển thị mảng\n    3.Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n    4.Tính tổng và trung bình cộng của các số dương trong mảng\n    5.Đảo ngược mảng\n    6.Kiểm tra mảng có đối xứng không\n    7.Thoát chương trình\n    Lựa chọn của bạn:")
    if (isNaN(choice)) {
        alert("Vui lòng nhập đúng")
    }
    switch (choice) {
        case 1:
            do {
                n = +prompt("Nhập số lượng phần tử")
                if (isNaN(n)) {
                    alert("Vui lòng nhập một số nguyên")
                }
            } while (isNaN(n))
            for (let i = 0; i < n; i++) {
                let input = +prompt(`Nhập phần tử thứ ${i + 1}:`)
                if (isNaN(input)) {
                    alert(`Phần tử thứ ${i + 1} không phải số! Nhập lại.`)
                    i--
                } else {
                    arr[i] = input
                }
            }
            break;
        
        case 2:
            alert(arr)
            break;
            
        case 3:
            let maxNum = arr[1]
            let maxIndx = 0
            for (let i=0; i<n; i++) {
                if (arr[i] > maxNum) {
                    maxNum = arr[i]
                    maxIndx = i
                }
                
            }
            alert(`Phần tử lớn nhất: ${maxNum}\nChỉ số phần tử: ${maxIndx}`)
            break;

        case 4:
            let sum = 0
            for (let i = 0; i < n; i++) {
                if (arr[i] >= 0) {
                    sum += arr[i]
                }
            }
            alert(`Tổng các số dương trong mảng: ${sum}\nTrung bình cộng các số dương trong mảng: ${sum/n}`)
            break;

        case 5:
            newArr = arr.reverse()
            alert(`mảng sau khi đảo ngược: ${newArr}`)
            break;
        
        case 6:
            let flag = true
            for (let i = 0; i < Math.floor(arr.length / 2); i++) {
                if(arr[i] !== arr[arr.length - 1 - i])
                flag = false
                break
            }
            if (flag) {
                alert("là mảng đối xứng")
            } else {
                alert("Không phải mảng đối xứng")
            }
            break;
        
        case 7:
            alert("Thoát chương trình!")
            break;
        default:
            alert("Lựa chọn không tồn tại, vui lòng chọn lại")
            break;
    }
} while (choice !==7);