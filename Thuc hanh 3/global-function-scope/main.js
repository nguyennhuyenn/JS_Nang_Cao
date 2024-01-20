// Biến có phạm vi toàn cục
const x = 100;

console.log(x, 'toàn cục');

function run() {
  // Truy cập biến toàn cục trong hàm
  console.log(window.innerHeight);
  console.log(x, 'trong hàm');
}

run();

// Truy cập biến toàn cục trong khối
if (true) {
  console.log(x, 'trong khối');
}

function add() {
  // Ghi đè biến toàn cục x (đè bóng biến)
  const x = 1;
  const y = 50;
  console.log(x + y);
}

// Không thể truy cập biến có phạm vi hàm ở phạm vi toàn cục
console.log(y);

add();