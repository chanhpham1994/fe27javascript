// Tao lop doi tuong Nhan Vien
function NhanVien(maNV,tenNV,email,matKhau,ngaySinh,chucVu){
    this.maNhanVien = maNV;
    this.tenNhanVien = tenNV;
    this.email = email;
    this.matKhau = matKhau;
    this.ngaySinh = ngaySinh;
    this.chucVu = chucVu;
    this.luongCB =  400; 
    /*2.Khi chuyển dữ liệu về kiểu JSON sẽ bỏ qua method tinhTongLuong() trong Object
    -> Gọi tongluong = 0;
    */
    this.tongluong = 0;
    //tổng lương = hệ số lương  * lương cơ bản
    // Sep 3
    // Truong phong 1.5
    // Nhan vien 1
    this.tinhTongLuong = function() {
        if(this.chucVu === "Sếp"){
            this.tongluong =  this.luongCB * 3;
        }
        else if(this.chucVu === "Trưởng phòng"){
            this.tongluong = this.luongCB * 1.5;
        }
        else if (this.chucVu === "Nhân viên"){
            this.tongluong = this.luongCB;
        }
    }

}