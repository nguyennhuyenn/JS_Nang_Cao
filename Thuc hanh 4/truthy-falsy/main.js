// Giá trị Falsy:
// - false
// - 0
// - "" hoặc '' (Chuỗi trống)
// - null
// - undefined
// - NaN

// Giá trị Truthy:
// - Mọi thứ còn lại không phải là falsy
// - true
// - '0' (0 trong chuỗi)
// - ' ' (khoảng trắng trong chuỗi)
// - 'false' (false trong chuỗi)
// - [] (mảng trống)
// - {} (đối tượng trống)
// - function () {} (hàm trống)

const x = function () {};

if (x) {
  console.log('Đây là truthy');
} else {
  console.log('Đây là falsy');
}

console.log(Boolean(x));

// Những điều cần lưu ý về Truthy và Falsy
const children = 3;

// Kiểm tra giá trị 0 theo kiểu chữ
if (children) {
  console.log(`Bạn có ${children} con`);
} else {
  console.log('Vui lòng nhập số lượng con');
}

// Giải pháp
if (!isNaN(children)) {
  console.log(`Bạn có ${children} con`);
} else {
  console.log('Vui lòng nhập số lượng con');
}

// Kiểm tra mảng rỗng
const posts = ['Bài viết một'];

// Luôn luôn là true, thậm chí khi rỗng
if (posts) {
  console.log('Danh sách bài viết');
} else {
  console.log('Không có bài viết nào để liệt kê');
}

// Giải pháp
if (posts.length > 0) {
  console.log('Danh sách bài viết');
} else {
  console.log('Không có bài viết nào để liệt kê');
}

// Kiểm tra đối tượng rỗng
const user = {
  name: 'Brad',
};

// Luôn luôn là true, thậm chí khi không có thuộc tính nào
if (user) {
  console.log('Danh sách người dùng');
} else {
  console.log('Không có người dùng nào');
}

// Giải pháp
if (Object.keys(user).length > 0) {
  console.log('Danh sách người dùng');
} else {
  console.log('Không có người dùng nào');
}

// So sánh rộng rãi (==)
console.log(false == 0); // true
console.log('' == 0); // true
console.log(null == undefined); // true

// So sánh nghiêm túc (===)
console.log(false === 0); // false
console.log('' === 0); // false
console.log(null === undefined); // false