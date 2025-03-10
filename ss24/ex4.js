
let choice
let arr = []
let row = 0
let col = 0
do {
    choice = +prompt("    1.Nhập mảng 2 chiều\n    2.Hiển thị mảng 2 chiều\n    3.Tính tổng các phần tử trong mảng\n    4.Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n    5.Tính trung bình cộng các phần tử của một hàng cụ thể\n    6.Đảo ngược các hàng trong mảng\n    7.Thoát chương trình\n    Lựa chọn của bạn:")
    if (isNaN(choice)) {
        alert("Vui lòng nhập đúng")
    }
    switch (choice) {
        case 1:
            do {
                row = +prompt("Nhập số dòng:");
                col = +prompt("Nhập số cột:");
                if (isNaN(row) || isNaN(col) || row <= 0 || col <= 0) {
                    alert("Vui lòng nhập số nguyên dương!");
                }
            } while (isNaN(row) || isNaN(col) || row <= 0 || col <= 0);

            arr = new Array(row);
            for (let i = 0; i < row; i++) {
                arr[i] = new Array(col);
            }

            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    let input;
                    do {
                        input = +prompt(`Nhập phần tử thứ [${i}][${j}]:`);
                        if (isNaN(input)) {
                            alert(`Phần tử thứ [${i}][${j}] không phải số! Nhập lại.`);
                        }
                    } while (isNaN(input));
                    arr[i][j] = input;
                }
            }
            break;

        case 2:
            let disStr = "";
            for (let i = 0; i < arr.length; i++) {
                disStr += arr[i].join(" ") + "\n";
            }
            alert(disStr);
            break;

        case 3:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    sum += arr[i][j];
                }
            }
            alert(`Tổng các phần tử trong mảng là: ${sum}`);
            break;

        case 4:
            let max = arr[0][0];
            let maxRow = 0;
            let maxCol = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] > max) {
                        max = arr[i][j];
                        maxRow = i;
                        maxCol = j;
                    }
                }
            }
            alert(`Phần tử lớn nhất trong mảng là: ${max} tại vị trí [${maxRow}][${maxCol}]`);
            break;

        case 5:
            let rowIndex = +prompt("Nhập chỉ số hàng cần tính trung bình cộng:");
            if (rowIndex >= 0 && rowIndex < arr.length) {
                let rowSum = 0;
                for (let j = 0; j < arr[rowIndex].length; j++) {
                    rowSum += arr[rowIndex][j];
                }
                let avg = rowSum / arr[rowIndex].length;
                alert(`Trung bình cộng của hàng ${rowIndex} là: ${avg}`);
            } else {
                alert("Chỉ số hàng không hợp lệ");
            }
            break;

        case 6:
            for (let i = 0; i < arr.length; i++) {
                arr[i].reverse();
            }
            alert("Đã đảo ngược các hàng trong mảng");
            let reverseStr = "";
            for (let i = 0; i < arr.length; i++) {
                reverseStr += arr[i].join(" ") + "\n";
            }
            alert("Mảng sau khi đảo ngược:\n" + reverseStr);
            break;

        case 7:
            alert("Thoát chương trình");
            break;

        default:
            alert("Lựa chọn không tồn tại, vui lòng chọn lại");
            break;
    }
} while (choice !== 7);