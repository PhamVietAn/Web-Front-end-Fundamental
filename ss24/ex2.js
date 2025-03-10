
let choice
let arr = []
let n = 0
do {
    choice = +prompt("    1.Nhập mảng\n    2.Hiển thị mảng\n    3.Tìm các phần tử chẵn và lẻ\n    4.Tính trung bình cộng của mảng\n    5.xóa phần tử tại vị trí chỉ định\n    6.tìm phần tử lớn thứ hai trong mảng\n    7.Thoát chương trình\n    Lựa chọn của bạn:")
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
            let evenNum = ''
            let oddNum = ''
            for (let i=0; i<n; i++) {
                if (arr[i] % 2 ===0) {
                    evenNum += arr[i] + ' '
                } else {
                    oddNum += arr[i] + ' '
                }
                
            }
            alert(`Phần tử chẵn: ${evenNum}\nPhần tử lẻ: ${oddNum}`)
            break;

        case 4:
            let sum = 0
            for (let i = 0; i < n; i++) {
                sum += arr[i]
            }
            alert(`Trung bình cộng các phần tử trong mảng: ${sum/n}`)
            break;

        case 5:
            let input = +prompt(`Nhập nhập vị trí phần tử muốn xóa (từ 1 đến ${n})`)
            arr.splice(input - 1, 1)
            alert(`mảng sau khi xóa phần tử tại vị trí thứ ${input}: ${arr}`)
            break;
        
        case 6:
            let max = 0
            let secondMax = 0

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    secondMax = max;
                    max = arr[i];
                } else if (arr[i] > secondMax && arr[i] < max) {
                    secondMax = arr[i];
                }
            }

            if (arr.length < 2) {
                alert("Mảng không đủ phần tử để tìm số lớn thứ hai");
            } else if (secondMax === 0) {
                alert(`Không có số lớn thứ hai`);
            } else {
                alert(`Số lớn thứ hai: ${secondMax}`);
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