let result = “javascript” + 5;
/* 
    Kết quả: "javascript5"
    Giải thích: Khi sử dụng toán tử + với một chuỗi và một số, JS sẽ thực hiện phép nối chuỗi. Số 5 chuyển thành chuỗi "5" và nối với "javascript".
*/

let result = “javascript” - 1;
/* 
    kết quả: NaN
    Giải thích: Toán tử - không thể thực hiện phép trừ với một chuỗi không phải số ("javascript"). 
*/

let result = “3” + 2;
/*
    Kết quả: 32
    Giải thích: Khi sử dụng toán tử + với một chuỗi và một số, JS sẽ ưu tiên phép nối chuỗi. Chuỗi "3" được giữ nguyên, và số 2 được chuyển thành chuỗi "2", sau đó nối lại thành "32".
*/

let result = “5” - 4;

/*
    Kết quả: 1
    Giải thích: Khi sử dụng toán tử -, JS sẽ chuyển đổi chuỗi "5" thành số 5 và thực hiện phép trừ 5 - 4.
*/

let result = isNaN( “123”);
/*
    Kết quả: false
    Giải thích: Hàm isNaN() kiểm tra xem giá trị có phải là NaN (Not a Number) hay không. Chuỗi "123" có thể chuyển đổi thành số 123 nên nó không phải là NaN.
*/

let result = isNaN(“hello”);
/*
    Kết quả: true
    Giải thích: Chuỗi "hello" không thể chuyển đổi thành một số, khi kiểm tra bằng isNaN() sẽ cho ra kết quả true
*/

let result = Number.isNaN("123");
/*
    Kết quả: false
    Giải thích: Hàm Number.isNaN() chỉ trả về true nếu giá trị là NaN và có kiểu dữ liệu là number. Ở đây, "123" là một chuỗi, không phải NaN, nên kết quả là false.
*/

let result = Number.isNaN(NaN);
/*
    Kết quả: true
    Giải thích: Hàm Number.isNaN() kiểm tra xem giá trị có phải là NaN và có kiểu dữ liệu là number hay không. Ở đây, NaN là một giá trị số đặc biệt, nên kết quả là true.
*/