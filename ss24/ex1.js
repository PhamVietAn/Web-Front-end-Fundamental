
let choice
let arr = []
let n = 0
do {
    choice = +prompt("    1.Nhập mảng\n    2.Hiển thị mảng\n    3.Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n    4.Tính tổng các phần tử trong mảng\n    5.TÌm số lần xuất hiện của một phần tử trong mảng\n    6.Sắp xếp mảng tăng dần\n    7.Thoát chương trình\n    Lựa chọn của bạn:")
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
            let maxIndx = arr[1]
            let minIndx = arr[1]
            for (let i=0; i<n; i++) {
                if (arr[i] > maxIndx) {
                    maxIndx = arr[i]
                }
                if (arr[i] < minIndx) {
                    minIndx = arr[i]
                }
            }
            alert(`Phần tử lớn nhất trong mảng: ${maxIndx}\nPhần tử nhỏ nhất trong mảng: ${minIndx}`)
            break;

        case 4:
            let sum = 0
            for (let i = 0; i < n; i++) {
                sum += arr[i]
            }
            alert(`Tổng các phần tử trong mảng: ${sum}`)
            break;

        case 5:
            let input = +prompt("Nhập nhập phần tử muốn kiểm tra")
            let count = 0
            for (let i=0; i<10; i++){
                if(input===arr[i]){
                    count++
                }
            }
            if (count===0) {
                alert(`Số ${input} không tồn tại trong mảng`)
            } else {
                alert(`Số ${input} xuất hiện ${count} lần trong mảng`)
            }
            break;
        
        case 6:
            alert(`Mảng ban đầu: ${arr}`);
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            alert(`Mảng sau khi sắp xếp tăng dần: ${arr}`);
            break;
        
        case 7:
            alert("Thoát chương trình!")
            break;
        default:
            alert("Lựa chọn không tồn tại, vui lòng chọn lại")
            break;
    }
} while (choice !==7);