// Quan ly nhan vien
// --Them Nhan Vien

// NEW cho javas biết khởi tạo ra 1 đối tượng

// var nhanVien = new NhanVien("001","Tuan","a@a",123,"123","Sếp");
// console.log(nhanVien);

var mangNhanVien = [];

var validation = new Validation();


/* //Lấy dữ liệu từ local storage (Lấy đúng key DSNV)
var jsonData = localStorage.getItem("DSNV");
if(jsonData){
 //Chuyển kiểu dữ liệu
 mangNhanVien = JSON.parse(jsonData);
 // console.log(mangNhanVien);
 HienThi();
}
else{
    mangNhanVien = [];
}*/

function themNguoiDung(){
    console.log("them nguoi dung minhchanh2");
}


function getEle(id){
    return document.getElementById(id);
}

function LayThongTin(){
        //Lay thong tin
        var maNhanVien = getEle("msnv").value;
        var tenNhanVien = getEle("name").value;
        var email = getEle("email").value;
        var matKhau = getEle("password").value;
        var ngaySinh = getEle("datepicker").value;
        var chucVu = getEle("chucvu").value;
        
        //Tao doi tuong (thong qua lop doi tuong)
        var nhanVien = new NhanVien(maNhanVien,tenNhanVien,email,matKhau,ngaySinh,chucVu);
        // Gọi phương thức từ class NhanVien
        nhanVien.tinhTongLuong();

        return nhanVien;

}


function themNhanVien(){
    //Lay thong tin
    var nhanVien = LayThongTin();

    var isValid = true;
    isValid &= validation.KiemTraRong("msnv", "tbMaNV" , "(*) vui long nhap ma");

    isValid &= validation.KiemTraDinhDangChu("name", "tbTen" , "(*) vui long nhap dung ky tu") &&
    validation.KiemTraDoDai("password", "tbMatKhau" , "(*) vui long nhap tren 8 ky tu",8,20);

    isValid &= validation.KiemTraChucVu();

    //Gan vao mang
    if(isValid){
        mangNhanVien.push(nhanVien);
        //Hien thi
        HienThi(mangNhanVien);
    }
    console.log(mangNhanVien);

    
}



function HienThi(mangHienThi){
    var content = "";
    var tableDanhSach = getEle("tableDanhSach")
    for(var i = 0; i < mangHienThi.length; i++){
        var NhanVien = mangHienThi[i];
        // var NhanVien =  mangNhanVien[mangNhanVien.length - 1];
        // template string `   `
        content += `
            <tr>
                <td>${NhanVien.maNhanVien}</td>
                <td>${NhanVien.tenNhanVien}</td>
                <td>${NhanVien.email}</td>
                <td>${NhanVien.ngaySinh}</td>
                <td>${NhanVien.chucVu}</td>
                <td>${NhanVien.tongluong}</td>
                <td>
                    <button class="btn btn-danger" 
                    data-id="${NhanVien.maNhanVien}" onclick="XoaNhanVien(event)">
                    Xóa
                    </button>
                    <button class="btn btn-info" data-id="${NhanVien.maNhanVien}"
                    data-toggle="modal" data-target="#myModal" onclick="HienThiThongTinLenForm(event)">
                    Sửa
                    </button>
                </td>
            </tr>
        `
        // Dấu "" trong data-id giúp lấy luôn khoảng cách giá trị cân lấy 
     }
    tableDanhSach.innerHTML = content;
}

// APPLICATION
// Local Storage không có bảo mật

//local storage :chỉ nhận vào kiểu dữ liệu là chuỗi JSON 
// Json là Kiểu Dữ Liệu
function LuuDuLieu() {

    /* Chú ý
    1.Chuyển kiểu dữ liệu về chuối JSON
    2.Khi chuyển dữ liệu về kiểu JSON sẽ bỏ qua method trong Object*/

    var jsonData = JSON.stringify(mangNhanVien);
    
    //Lưu vào localstorage: kieu key -> value;
    localStorage.setItem("DSNV",jsonData);
}

//Lay Du Lieu
function LayDuLieu(){

    //Lấy dữ liệu từ local storage (Lấy đúng key DSNV)
    var jsonData = localStorage.getItem("DSNV");

    //Chuyển kiểu dữ liệu
    mangNhanVien = JSON.parse(jsonData);
    // console.log(mangNhanVien);
    HienThi(mangNhanVien);
}


//XOA BUTTON
function TimViTri(id){
    //Lay tung nhan vien bang cach duyet mang
    for(var i = 0; i < mangNhanVien.length; i++){
        var nhanVien = mangNhanVien[i];
        if(nhanVien.maNhanVien === id){
            return i;
            break;
        }
    }
    return -1;
}


/*Sự kiện được lưu vào biến event 
 Thuộc tính target nơi phát sinh ra sự kiện đó
*/
function XoaNhanVien(event){
    var btnXoa = event.target;
    var idXoa = btnXoa.getAttribute("data-id");
    //Lấy ID cần xóa
    // console.log(event.target);
    console.log(idXoa);

    //Kiễm tra ID và tìm vị trí ID cần xóa
    // for(var i = 0; i < mangNhanVien.length; i++){
    //     var maNV = mangNhanVien[i].maNhanVien;
    //     if(idXoa = maNV){
    //        var index = i;
    //        break;
    //     }
    //     return -1;
    // }

    //Tim vi tri can xoa;
    var index = TimViTri(idXoa);

    //Xoa 
    //Đề lên vùng nhớ  (mảng tham chiếu)
    mangNhanVien.splice(index,1);

    HienThi(mangNhanVien);

}


/*HIen thi thong tin len form*/
function HienThiThongTinLenForm(event){
    //Hiển thị thông tin lên Form
    var btnSua = event.target;
    var idSua = btnSua.getAttribute("data-id");
    console.log(idSua);

    //Tim vi tri can xoa;
    var index = TimViTri(idSua);
    console.log(index);

    // var nhanVien = mangNhanVien[index];
  
    //Hien thi
    getEle("msnv").value = mangNhanVien[index].maNhanVien;
    getEle("name").value = mangNhanVien[index].tenNhanVien;
    getEle("email").value = mangNhanVien[index].email;
    getEle("password").value = mangNhanVien[index].matKhau;
    getEle("datepicker").value = mangNhanVien[index].ngaySinh;
    getEle("chucvu").value = mangNhanVien[index].chucVu;

    //KHong cho ng dung sua ma nhan vien
    getEle("msnv").setAttribute("readonly",true);
}



/*CAP NHAT THONG TIN*/
function CapNhatThongTin(){
//Lay thong tin va tao doi tuong
var nhanVien = LayThongTin();

//Cập nhật Đè lên đối tượng cần sửa
var index = TimViTri(nhanVien.maNhanVien);
mangNhanVien[index] = nhanVien;

HienThi(mangNhanVien);
}


/*TIM NHAN VIEN */
function TimNhanVien(){
    //Lay thong tin
    var mangNhanVienTimKiem = [];
    var keyword = getEle("searchName").value;
    //Chuyển về chuỗi viết thường
    //regular expression
    keyword = keyword
    .toLowerCase() // chuyen thanh chữ thường
    .replace(/\s/g, ""); // xóa khoảng trắng

    // console.log(keyword);

    //JS thuần
    //Hien thi
    // for(var i = 0; i < mangNhanVien.length; i++){
    //     if(mangNhanVien[i].tenNhanVien.toLowerCase().replace(/\s/g, "") === keyword){
    //         mangNhanVienTimKiem.push(mangNhanVien[i]);
    //     }
    // }

    //JS ES6 
    //call back function ham trong ham
    //filter gọi ra từng phần tử của mảng + hàm filter return boolean
    // trả về mảng mới không trùng vùng nhớ với mangNhanVien
    // gán lại cho mangNhanVienTimKiem
     mangNhanVienTimKiem = mangNhanVien.filter(function (nhanVien){
       return nhanVien.tenNhanVien.toLowerCase().replace(/\s/g, "").indexOf(keyword) !== -1;
    })

    console.log(mangNhanVienTimKiem);

    HienThi(mangNhanVienTimKiem);
}




// Goi ham (thay cho onclick="" ben html)

//Call back function
getEle("btnThemNV").addEventListener("click",function(){
    themNhanVien();
});

getEle("btnLuuDuLieu").addEventListener("click",LuuDuLieu);

getEle("btnLayDuLieu").addEventListener("click",LayDuLieu);

getEle("btnCapNhat").addEventListener("click",CapNhatThongTin);

getEle("btnTimNV").addEventListener("click",TimNhanVien);

//KEYUP
getEle("searchName").addEventListener("keyup",TimNhanVien);


// getEle("btnThemNV").addEventListener("click",themNhanVien);
// khong ghi themNhanVien()