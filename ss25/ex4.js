let primeNum = function() {
    let input = +prompt("Nhập vào một số nguyên dương")
    if (input < 0 || isNaN(input) || input % 1 !== 0) {
        return "Dữ liệu nhập vào không hợp lệ"
    }

    let flag = true
 
    if (input < 2){
        flag = false;
    } else if (input === 2) {
        flag = true;
    } else if (input % 2 === 0) {
        flag = false;
    } else {
        for (let i = 3; i < input-1; i+=2)
        {
            if (input % i == 0){
                flag = false;
                break;
            }
        }
    }
    if (flag == true){
        return "Là số nguyên tố"
    }
    else{
        return "không phải là số nguyên tố"
    }
    
}

alert(primeNum())