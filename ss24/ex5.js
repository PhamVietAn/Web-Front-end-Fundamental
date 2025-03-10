let choice;
let arr = [];
let row = 0;
let col = 0;

do {
    choice = +prompt("    1. Nhập mảng 2 chiều\n    2. Hiển thị mảng 2 chiều\n    3. Tính tổng các phần tử trong mảng\n    4. Tính tổng đường chéo chính\n    5. Tính tổng đường chéo phụ\n    6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột\n    7. Thoát chương trình\n    Lựa chọn của bạn:");
    if (isNaN(choice)) {
        alert("Vui lòng nhập đúng");
    }

    switch (choice) {
        case 1:
            do {
                row = +prompt("Nhập số dòng:");
                col = +prompt("Nhập số cột:");
                if (isNaN(row) || isNaN(col) || row <= 0 || col <= 0) {
                    alert("Vui lòng nhập số nguyên dương");
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
            if (arr.length === 0) {
                alert("Mảng chưa được nhập");
            } else {
                let disStr = "";
                for (let i = 0; i < arr.length; i++) {
                    disStr += arr[i].join(" ") + "\n";
                }
                alert("Mảng 2 chiều:\n" + disStr);
            }
            break;

        case 3:
            if (arr.length === 0) {
                alert("Mảng chưa được nhập");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        sum += arr[i][j];
                    }
                }
                alert(`Tổng các phần tử trong mảng là: ${sum}`);
            }
            break;

        case 4:
            if (arr.length === 0) {
                alert("Mảng chưa được nhập");
            } else if (row !== col) {
                alert("Mảng không phải là ma trận vuông, không có đường chéo chính");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i][i];
                }
                alert(`Tổng đường chéo chính là: ${sum}`);
            }
            break;

        case 5:
            if (arr.length === 0) {
                alert("Mảng chưa được nhập");
            } else if (row !== col) {
                alert("Mảng không phải là ma trận vuông, không có đường chéo phụ");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i][arr.length - 1 - i];
                }
                alert(`Tổng đường chéo phụ là: ${sum}`);
            }
            break;

        case 6:
            if (arr.length === 0) {
                alert("Mảng chưa được nhập");
            } else {
                let choiceRC = prompt("Bạn muốn tính trung bình cộng của hàng (h) hay cột (c)?");
                if (choiceRC === "h") {
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
                } else if (choiceRC === "c") {
                    let colIndex = +prompt("Nhập chỉ số cột cần tính trung bình cộng:");
                    if (colIndex >= 0 && colIndex < arr[0].length) {
                        let colSum = 0;
                        for (let i = 0; i < arr.length; i++) {
                            colSum += arr[i][colIndex];
                        }
                        let avg = colSum / arr.length;
                        alert(`Trung bình cộng của cột ${colIndex} là: ${avg}`);
                    } else {
                        alert("Chỉ số cột không hợp lệ");
                    }
                } else {
                    alert("Lựa chọn không hợp lệ");
                }
            }
            break;

        case 7:
            alert("Thoát chương trình");
            break;

        default:
            alert("Lựa chọn không tồn tại, vui lòng chọn lại");
            break;
    }
} while (choice !== 7);