/** Chương trình tính tiền lương nhân viên
 *
 * Input: + lương 1 ngày
 *        + số ngày làm
 *
 * Algorithm:
 * - B1: Tạo biến luongMotNgay và gán giá trị mặc định là 100000
 * - B2: Tạo biến soNgayLam và nhận giá trị từ người dùng nhập vào
 * - B3: Tạo biến luong và tính theo công thức lươngMotNgay * soNgayLam
 * - B4: In ra màn hình giá trị luong
 *
 * Output: Lương của nhân viên
 */

function handleCalculateSalary() {
  const luongMotNgay = document.querySelector("#luongMotNgay").value;
  const soNgayLam = document.getElementById("soNgayLam").value;
  const showSalary = document.getElementById("showSalary");

  let luong = luongMotNgay * soNgayLam;
  showSalary.innerHTML = `${luong.toLocaleString()} vnđ`;
}

/** Chương trình tính giá trị trung bình
 *
 * Input: - Số thực thứ 1, 2, 3, 4, 5
 *
 * Algorithm:
 * - B1: Khai báo biến num1, num2, num3, num4, num5, average
 * - B2: Gán giá trị cho num1, num2, num3, num4, num5 bằng giá trị của người dùng nhập vào
 * - B3: Tính giá trị trung bình theo công thức
 *       average = (num1 + num2 + num3 + num4 + num5) / 5
 * - B4: In average ra giao diện
 *
 * Output: Giá trị trung bình của 5 số
 */

function handleCalculateAverage() {
  const numb1 = parseInt(document.getElementById("numb-1").value);
  const numb2 = parseInt(document.getElementById("numb-2").value);
  const numb3 = parseInt(document.getElementById("numb-3").value);
  const numb4 = parseInt(document.getElementById("numb-4").value);
  const numb5 = parseInt(document.getElementById("numb-5").value);
  const averageLabel = document.getElementById("showAverage");
  let average = (numb1 + numb2 + numb3 + numb4 + numb5) / 5;
  averageLabel.innerHTML = `Giá trị trung bình là: ${average.toLocaleString()}`;
}

/** Chương trình quy đổi tiền
 *
 * Input: + Giá USD là 23,500 vnđ
 *        + Số tiền người dùng nhập vào
 *
 * Algorithm:
 * - B1: Khai báo biến usdToVnd và gán giá trị bằng 23500
 * - B2: Khai báo biến usdUser và nhận giá trị từ người dùng nhập vào
 * - B3: Khai báo biến result
 * - B4: Quy đổi tiền theo công thức
 *       result = usdUser * usdToVnd
 * - B5: Hiển thị result ra giao diện
 *
 * Output: Số tiền quy đổi từ USD sang Vnđ
 */

function handleCalculateCurrency() {
  const usdUser = parseFloat(document.querySelector("#usdUser").value);
  const showCurrency = document.querySelector("#showCurrency");
  const usdToVnd = 23500;
  let result = usdUser * usdToVnd;
  showCurrency.innerHTML = `${new Intl.NumberFormat("vn-VN", {
    style: "currency",
    currency: "VND",
  }).format(result)}`;
}

/** Chương trình tính diện tích, chu vi hình chữ nhật
 *
 * Input : Chiều dài, chiều rộng
 *
 * Algorithm:
 * - B1: Khai báo biến lengthRect, widthRect, perimeter, acreage
 * - B2: Gán giá trị của lengthRect, widthRect từ giá trị nhập vào của người dùng
 * - B3: Tính chu vi theo công thức
 *       perimeter = (lengthRect + widthRect) * 2
 * - B4: Tính diện tích theo công thức
 *       acreage = lengthRect * widthRect
 * - B5: Hiển thị ra giao diện perimeter, acreage
 *
 * Output: Chu vi, diện tích hình chữ nhật
 */

function handleCalculateRect() {
  const lengthRect = parseInt(document.getElementById("lengthRect").value);
  const widthRect = parseInt(document.getElementById("widthRect").value);
  const showRect = document.getElementById("showRect");
  let perimeter = (lengthRect + widthRect) * 2;
  let acreage = lengthRect * widthRect;
  showRect.innerHTML = `Chu vi: ${perimeter} - Diện tích: ${acreage}`;
}

/** Chương trình tính tổng 2 ký sổ
 *
 * Input: số có 2 chữ số
 *
 * Algorithm:
 * - B1: Khai báo biến number và nhận giá trị từ người dùng nhập vào
 * - B2: Khai báo biến units, tens, sum
 * - B3: Tính giá trị chữ số hàng đơn vị bằng công thức
 *       units = number % 10
 * - B4: Tính giá trị chữ số hàng chục
 *       tens = Math.floor(number / 10)
 * - B5: Tính tổng 2 ký số
 *       sum = tens + units
 * - B6: Hiển thị ra giao diện
 *
 * Output: Tổng 2 ký số
 *
 */

function handleCalculateSum() {
  const number = parseInt(document.getElementById("number").value);
  const showNumber = document.querySelector("#showResult");

  let units = number % 10;
  let tens = Math.floor(number / 10);
  let sum = units + tens;
  showNumber.innerHTML = sum;
}
