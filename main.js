const numArray = [];

/* Hàm onclick để thêm 1 phần tử số vào numArray */

document.getElementById("btn_themSo").onclick = () => {
  //input
  const valueNumber = document.getElementById("ipt_themSo").value * 1;
  //handle
  numArray.push(valueNumber);
  //output
  document.getElementById("txtArray").innerHTML = numArray;
};

/* 
Bài tập 1:
Tính tổng số dương
*/

document.getElementById("e1_btn_tinhTong").onclick = () => {
  //input
  //handle
  const total = numArray.reduce((total, num) => {
    if (num > 0) {
      return (total += num);
    } else {
      return total;
    }
  }, 0);
  //output
  document.getElementById(
    "e1_result"
  ).innerHTML = `Tổng <span class="text-danger">số dương</span> trong mảng là <span class="text-primary">${total}</span>`;
};

/* 
Bài tập 2:
Đếm số dương trong mảng
*/

document.getElementById("e2_btn_demSo").onclick = () => {
  //input
  //handle
  let count = 0;
  numArray.forEach((num) => {
    if (num > 0) {
      count++;
    }
    return count;
  });
  //output
  document.getElementById(
    "e2_result"
  ).innerHTML = `<span class="text-danger">Số dương</span> đếm được là: <span class="text-primary">${count}</span>`;
};

/* 
Bài tập 3:
Tìm số nhỏ nhất trong mảng
*/

document.getElementById("e3_btn_soNhoNhat").onclick = () => {
  //input
  //handle
  let minNum = numArray[0];
  numArray.forEach((num) => {
    if (num < minNum) {
      minNum = num;
    }
    return minNum;
  });
  //output
  document.getElementById(
    "e3_result"
  ).innerHTML = `Số nhỏ nhất: <span class="text-danger">${minNum}</span>`;
};

/* 
Bài tập 4:
Tìm số dương nhỏ nhất trong mảng
*/

document.getElementById("e4_btn_soDuongNhoNhat").onclick = () => {
  //input
  const arrNumPositive = numArray.filter((num) => num > 0);
  //handle
  let minNum = arrNumPositive[0];
  arrNumPositive.forEach((num) => {
    if (num < minNum) {
      minNum = num;
    }
    return minNum;
  });
  //output

  if (minNum != undefined) {
    document.getElementById(
      "e4_result"
    ).innerHTML = `<span class="text-danger">Số dương</span> nhỏ nhất: <span class="text-primary">${minNum}</span>`;
  } else {
    document.getElementById(
      "e4_result"
    ).innerHTML = `Không có <span class="text-danger">số dương</span> trong mảng`;
  }
};

/* 
Bài tập 5:
Tìm số chẵn cuối cùng trong mảng
*/

document.getElementById("e5_btn_soChan").onclick = () => {
  //input
  let evenNumber;
  // handle
  numArray.forEach((num) => {
    if (num % 2 === 0) {
      evenNumber = num;
    }
  });
  //output
  if (evenNumber != undefined) {
    document.getElementById(
      "e5_result"
    ).innerHTML = `Số chẵn cuối cùng: <span class="text-primary">${evenNumber}</span>`;
  } else {
    document.getElementById(
      "e5_result"
    ).innerHTML = `Không có <span class="text-danger">số chẵn</span> trong mảng`;
  }
};

/* 
Bài tập 6:
Đổi chỗ vị trí trong mảng
*/

document.getElementById("e6_btn_doiCho").onclick = () => {
  //input
  const viTri1 = document.getElementById("e6_input1").value * 1;
  const viTri2 = document.getElementById("e6_input2").value * 1;
  //handle
  if (viTri1 < 0 || viTri2 < 0) {
    alert("Vui lòng nhập vị trí là 0 hoặc số dương");
  } else if (viTri1 > numArray.length - 1 || viTri2 > numArray.length - 1) {
    alert("Vị trí này đang không có phần tử");
  } else {
    const valueViTri1 = numArray[viTri1];
    const valueViTri2 = numArray[viTri2];
    numArray.splice(viTri2, 1, valueViTri1);
    numArray.splice(viTri1, 1, valueViTri2);
    //output
    //DOM toi mang hien thi o tren
    document.getElementById("txtArray").innerHTML = `${numArray}`;
    //DOM toi ket qua
    document.getElementById(
      "e6_result"
    ).innerHTML = `Mảng sau khi đổi: ${numArray}`;
  }
};

/* 
Bài tập 7:
Sắp xếp tăng dần
*/

document.getElementById("e7_btn_sapXep").onclick = () => {
  //input
  //handle
  numArray.sort((a, b) => a - b);
  //output
  document.getElementById(
    "e7_result"
  ).innerHTML = `Mảng sau khi sắp xếp: ${numArray}`;
};

/* Bài tập 8:
Tìm số nguyên tố đầu tiên trong mảng
 */

document.getElementById("e8_btn_nguyenTo").onclick = () => {
  //input
  //handle
  let result = -1;
  for (let num of numArray) {
    if (isPrimeNumber(num)) {
      result = num;
      break;
    }
  }
  //output
  if (result === -1) {
    document.getElementById(
      "e8_result"
    ).innerHTML = `Không có số nguyên tố trong mảng hiện tại`;
  } else {
    document.getElementById(
      "e8_result"
    ).innerHTML = `Số nguyên tố <span class="text-danger">đầu tiên</span> trong mảng là: <span class="text-primary">${result}</span>`;
  }
};

function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

/* Bài tập 9:
Đếm số nguyên trong mảng
 */

document.getElementById("e9_btn_demSoNguyen").onclick = () => {
  //input
  //handle
  let count = 0;
  numArray.forEach((num) => {
    if (Number.isInteger(num)) {
      count++;
    }
  });
  //output
  document.getElementById(
    "e9_result"
  ).innerHTML = `Số nguyên có trong mảng: <span class="text-primary">${count}</span>`;
};

/* Bài tập 10:
So sánh số lượng số âm và số dương
 */

document.getElementById("e10_btn_soSanh").onclick = () => {
  //input
  //handle
  let countSoAm = 0;
  let countSoDuong = 0;
  numArray.forEach((num) => {
    if (num > 0) {
      countSoDuong++;
    } else if (num < 0) {
      countSoAm++;
    }
  });
  //output
  if (countSoAm === countSoDuong) {
    document.getElementById(
      "e10_result"
    ).innerHTML = `<span class="text-danger">Số âm</span> bằng <span class="text-primary">Số dương</span>`;
  } else if (countSoAm < countSoDuong) {
    document.getElementById(
      "e10_result"
    ).innerHTML = `<span class="text-danger">Số âm</span> ít hơn <span class="text-primary">Số dương</span>`;
  } else if (countSoAm > countSoDuong) {
    document.getElementById(
      "e10_result"
    ).innerHTML = `<span class="text-danger">Số âm</span> nhiều hơn <span class="text-primary">Số dương</span>`;
  }
};
