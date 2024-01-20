// Định nghĩa một hàm
function sayHello() {
    console.log('xin chào');
    }
  
    // Gọi, thực thi hoặc triệu gọi một hàm
    sayHello();
  
    // Định nghĩa một hàm với tham số
    function add(num1, num2) {
    console.log(num1 + num2);
    }
  
    // Gọi hàm với đối số
    add(5, 10);
  
  
  
    // Trả về một giá trị
    function subtract(num1, num2) {
    return num1 - num2;
  
    console.log('Sau khi có lệnh return');
    }
  
    // Gán giá trị trả về cho một biến
    const result = subtract(10, 2);
  
    console.log(result, subtract(20, 5));