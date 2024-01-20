// Cú pháp câu lệnh If
if (true) {
    console.log('Điều này là đúng');
  }
  
  if (false) {
    console.log('Điều này KHÔNG đúng');
  }
  
  // Đánh giá biểu thức
  const x = 10;
  const y = 5;
  
  if (x >= y) {
    console.log(`${x} lớn hơn hoặc bằng ${y}`);
  }
  
  if (x === y) {
    console.log(`${x} bằng ${y}`);
  } else {
    console.log(`${x} KHÔNG bằng ${y}`);
  }
  
  // Phạm vi khối (Block scope)
  if (x !== y) {
    const z = 20;
    console.log(`${z} là 20`);
  }
  
  // console.log(z); // Gây lỗi vì z chỉ tồn tại trong khối
  
  // Shorthand If/Else
  if (x >= y)
    console.log(`${x} lớn hơn hoặc bằng ${y}`),
      console.log('Điều này là đúng');
  else console.log('Điều này là sai');