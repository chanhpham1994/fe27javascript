function Validation(){
    //Kiem tra rỗng
    this.KiemTraRong = function (idInput, idThongBao, noiDungTB){
        var value = getEle(idInput).value;
        var isValid = true;
        if(value === ""){
            isValid = false;
            getEle(idThongBao).style.display = "block";
            getEle(idThongBao).innerHTML = noiDungTB;
        }
        else{
            getEle(idThongBao).innerHTML = "";
        }
        return isValid;
    }

    //Kiem tra dinh dang chữ
    this.KiemTraDinhDangChu = function (idInput, idThongBao, noiDungTB){
        var value = getEle(idInput).value;
        var isValid = true;
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
         "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
         "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");

        if(!pattern.test(value)){
            isValid = false;
            getEle(idThongBao).style.display = "block";
            getEle(idThongBao).innerHTML = noiDungTB;
        }
        else{
            getEle(idThongBao).innerHTML = "";
        }
        return isValid;
    }

    //Kiễm tra độ dài
    this.KiemTraDoDai = function (idInput, idThongBao, noiDungTB, min , max){
        var value = getEle(idInput).value;
        var isValid = true;
        if(value.length < min || value.length > max){
            isValid = false;
            getEle(idThongBao).style.display = "block";
            getEle(idThongBao).innerHTML = noiDungTB;
        }
        else{
            getEle(idThongBao).innerHTML = "";
        }
        return isValid;
    }


    //Kiem tra chuc vu
    // select index
    this.KiemTraChucVu = function (){
        var chucvuElm = getEle("chucvu");
        var isValid = true;
    
        if(chucvuElm.selectedIndex === 0){
            isValid = false;
            getEle("tbChucVu").style.display = "block";
            getEle("tbChucVu").innerHTML = "(*) Vui long chon chuc vu";
        }
        else{
            getEle("tbChucVu").innerHTML = "";
        }
        return isValid;
    }

}

