const d = new Date(2022, 1, 10, 19, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

// Đánh giá giá trị ngay lập tức
switch (month) {
  case 1:
    console.log('Bây giờ là tháng Một');
    break;
  case 2:
    console.log('Bây giờ là tháng Hai');
    break;
  case 3:
    console.log('Bây giờ là tháng Ba');
    break;
  default:
    console.log('Không phải là tháng 1, 2 hoặc 3');
}

// Đánh giá giá trị trong khoảng
switch (true) {
  case hour < 12:
    console.log('Buổi sáng tốt lành');
    break;
  case hour < 18:
    console.log('Buổi chiều tốt lành');
    break;
  default:
    console.log('Buổi tối tốt lành');
}