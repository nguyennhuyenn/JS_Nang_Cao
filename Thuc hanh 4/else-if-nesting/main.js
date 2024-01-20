const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();

// Câu lệnh If và Else If
if (hour < 12) {
  console.log('Buổi sáng tốt lành');
} else if (hour < 18) {
  console.log('Buổi chiều tốt lành');
} else {
  console.log('Buổi tối tốt lành');
}

// If lồng nhau
if (hour < 12) {
  console.log('Buổi sáng tốt lành');

  if (hour === 6) {
    console.log('Hãy thức dậy!');
  }
} else if (hour < 18) {
  console.log('Buổi chiều tốt lành');
} else {
  console.log('Buổi tối tốt lành');

  if (hour >= 20) {
    console.log('zzzzzzzz');
  }
}

// Sử dụng phép toán logic để kiểm tra thời gian làm việc
if (hour >= 7 && hour < 15) {
  console.log('Đến lúc làm việc!');
}

// Sử dụng phép toán logic để kiểm tra khi nào cần đánh răng
if (hour === 6 || hour === 20) {
  console.log('Hãy đánh răng!');
}