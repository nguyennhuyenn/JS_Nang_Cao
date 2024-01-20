const age = 17;

// Sử dụng câu lệnh if
if (age >= 18) {
  console.log('Bạn có thể bỏ phiếu!');
} else {
  console.log('Bạn không thể bỏ phiếu');
}

// Sử dụng toán tử ternary
age >= 18 ? console.log('Bạn có thể bỏ phiếu!') : console.log('Bạn không thể bỏ phiếu');

// Gán giá trị có điều kiện cho một biến
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'Bạn có thể bỏ phiếu!' : 'Bạn không thể bỏ phiếu';

console.log(canVote);
console.log(canVote2);


const auth = true;

edirect = '/login';

const redirect = auth
  ? (alert('Chào mừng bạn đến trang dashboard'), '/dashboard')
  : (alert('Truy cập bị từ chối'), '/login');

console.log(redirect);

// Ternary mà không có else
auth ? console.log('Chào mừng bạn đến trang dashboard') : null;
// Shorthand cho ternary mà không có else
auth && console.log('Chào mừng bạn đến trang dashboard');