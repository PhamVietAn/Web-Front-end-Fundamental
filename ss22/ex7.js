let numbers = [];
for (let i=0; i<10; i++){
    numbers[i] = +prompt(`Nhập phần tử thứ ${i+1}`)
}
alert(`Mảng ban đầu: ${numbers}`);

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
alert(`Mảng sau khi sắp xếp tăng dần: ${numbers}`);