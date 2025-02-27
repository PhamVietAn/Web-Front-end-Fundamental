let numA = +prompt("Phương trình bậc 2 có dạng ax^2 + bx + c = 0\nNhập số a:");
let numB = +prompt("Nhập số b:");
let numC = +prompt("Nhập số c:");
if(numA === 0){
    console.log("Đây không phải là phương trình bậc 2 (a phải khác 0)");
}else{
    let delta = numB * numB - 4 * numA * numC;
    if(delta < 0){
        console.log("Phương trình vô nghiệm");
    }else if(delta == 0){
        let x = -numB / (2 * numA);
        console.log(`Phương trình có nghiệm kép: x = ${x}`);
    }else{
        let x1 = (-numB + Math.sqrt(delta)) / (2 * numA);
        let x2 = (-numB - Math.sqrt(delta)) / (2 * numA);
        console.log(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
    }
}