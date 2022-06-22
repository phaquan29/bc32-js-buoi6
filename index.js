// Bài 1: Tìm số nguyên dương nhỏ nhất sao cho  1 + 2 + .. + n > 10000
document.getElementById("btnSoNguyenDuong").onclick = function () {
  // output ketQua: string
  var ketQua = "Số nguyên dương nhỏ nhất: " + timSoNguyenDuong();
  //   output ra giao diện màn hinh
  document.getElementById("ketQua_b1").innerHTML = ketQua;
};

function timSoNguyenDuong() {
  //   input n = 0
  var n = 0;
  // progress
  //   B1: giá trị thay đổi
  var tong = 0;

  while (tong < 10000) {
    // B2: điều kiện lặp

    // B3: khối lệnh xử lý
    n++;
    // B4: thay đổi điều kiện lặp
    tong += n;
  }
  return n;
}

// Bài 2: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n (Sử dụng vòng lặp và hàm)
document.getElementById("btnTinhTong").onclick = function () {
  // output ketQua string;
  var ketQua = "Tổng: " + tinhSoMu("soX", "soN");
  //   output in ra giao diện màn hình
  document.getElementById("ketQua_b2").innerHTML = ketQua;
};

// hàm tính tổng số mũ
function tinhSoMu(id1, id2) {
  // input soX:number, soN: number
  var soX = Number(document.getElementById(id1).value);
  var soN = Number(document.getElementById(id2).value);
  //   output tong: number
  var tong = 0;
  //   progress
  //   B1: giá trị thay đổi
  var soMu = 1;
  while (soMu <= soN) {
    // B2: điều kiện lặp

    // B3: khối lệnh xử lý
    tong += Math.pow(soX, soMu);
    // B4: thay đổi điều kiện
    soMu++;
  }
  return tong;
}

// Bài 3: Nhập vào n. Tính giai thừa 1*2*...n
document.getElementById("btnTinhGiaiThua").onclick = function () {
  // output ketQua: string
  var ketQua = "Giai thừa: " + tinhGiaiThua("soN_3");
  //   output ra màn hình giao diện
  document.getElementById("ketQua_b3").innerHTML = ketQua;
};

// hàm tính giai thừa
function tinhGiaiThua(id) {
  //   input soN: number
  var soN = Number(document.getElementById(id).value);
  //   output ketQua: number
  var ketQua = 1;
  //   progress
  // B1: giá trị thay đổi
  var soHang = 1;
  while (soHang <= soN) {
    // B2: điều kiện lặp

    // B3: khối lệnh xử lý
    ketQua *= soHang;
    // B4: thay đổi điều kiện
    soHang++;
  }
  return ketQua;
}

// Bài 4:Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh.

document.getElementById("btnDiv").onclick = function () {
  showDiv();
};

// hàm show div
function showDiv() {
  // input n = 0
  var n = 1;
  //   output showDiv: string
  var showDiv = document.getElementById("showDiv");
  //   progress
  //  B1: giá trị thay đổi n = 0
  while (n <= 10) {
    // B2: điều kiện lặp

    // B3: khối lệnh xử lý
    if (n % 2 === 0) {
      var div = document.createElement("div");
      div.innerHTML = "Div chẵn: " + n;
      div.style.backgroundColor = "red";
      div.style.color = "#000";
      showDiv.appendChild(div);
    } else {
      var div = document.createElement("div");

      div.innerHTML = "Div lẻ: " + n;
      div.style.backgroundColor = "blue";
      div.style.color = "#000";

      showDiv.appendChild(div);
    }

    // B4: thay đổi điều kiện lặp
    n++;
  }
  return showDiv;
}

// Bài 5:Tìm số chẵn/lẻ nhỏ hơn 100
document.getElementById("btnChanLe").onclick = function () {
  // input n = 0
  var n = 0;
  // output soChan = string, soLe = string
  var soChan = "";
  var soLe = "";
  // progress
  // B1: giá trị thay đổi n = 0
  while (n < 100) {
    // B2: điều kiện lặp

    // B3: khối lệnh xử lý
    if (n % 2 === 0) {
      soChan += n + " ";
    } else {
      soLe += n + " ";
    }

    // B4: thay đổi điều kiện lặp
    n++;
  }
  //   output ra màn hình giao diện
  document.getElementById("ketQua_b5").innerHTML =
    "Số chẵn: " + soChan + "<br/>" + "Số lẻ: " + soLe;
};

// Bài 6:Đếm số chia hết cho 3 nhỏ hơn 1000

document.getElementById("btnSoChiaHet").onclick = function () {
  // output ketQua: string
  var ketQua = "Số chia hết cho 3 nhỏ hơn 1000: " + soChiaHetCho3();

  //   output ra màn hình giao diện
  document.getElementById("ketQua_b6").innerHTML = ketQua;
};

// hàm chia hết cho 3
function soChiaHetCho3() {
  // input  n = 0
  var n = 0;
  //   output tongSo = number
  var tongSo = 0;
  //   progress
  // B1: giá trị thay đổi n = 1
  while (n < 1000) {
    // B2: điều kiện lặp

    // B3: Khối lệnh xử lý
    if (n % 3 === 0) {
      tongSo++;
    }

    // B4: thay đổi điều kiện lặp
    n++;
  }
  return tongSo;
}

// Bài 7: In số nguyên tố
document.getElementById("btnSoNguyenTo").onclick = function () {
  // output ketQua: string
  var ketQua = soNguyenTo("soN_7");
  //   output ra màn hình giao diện
  document.getElementById("ketQua_b7").innerHTML = ketQua;
};

// hàm số nguyên tố
function soNguyenTo(id) {
  // input soN: number
  var soN = Number(document.getElementById(id).value);

  //   output soNguyenTo = string
  var soNguyenTo = "";
  //   progress
  // B1: giá trị thay đổi
  var soLan = 1;
  while (soLan <= soN) {
    // B2: điều kiện lặp

    // B3: khổi lệnh xử lý
    var dem = 0;
    //   B1: giá trị thay đổi
    var uocSo = 1;
    while (uocSo <= soN) {
      // B2: điều kiện lặp
      // B3: khối lệnh xử lý
      if (soLan % uocSo === 0) {
        dem++;
      }
      //   B4: thay dổi điều kiện lặp
      uocSo++;
    }
    if (dem === 2) {
      soNguyenTo += soLan + " ";
    }
    //   B4: thay đổi điều kiện lặp
    soLan++;
  }

  return soNguyenTo;
}
