$(document).ready(function(){
    $("#nhapSach").click(function(){
        $('#myModal').modal();
    })
    // viết hàm kiểm tra họ và tên
    function kiemTraTen(){
        var mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#Name").val() == ""){
            $("#tbhoTen").html("Khong de trong");
            return false;
        }
        if(!mauKT.test($("#Name").val())){
            $("#tbhoTen").html("Moi ky tu dau viet hoa khong su dung so");
            return false;
        }
        $("#tbhoTen").html("Nhap thanh cong");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    //kiem tra ma nhan vien
    function kiemtramaNV(){
        var mauKT = /^[V][N]-\d{3}-\d{4}$/;
        if($("#MaNV").val() == ""){
            $("#tbMaNV").html("Khong de trong");
            return false;
        }
        if(!mauKT.test($("#MaNV").val())){
            $("#tbMaNV").html("Ma khong hop le phai theo dang: VN-XXX-XXXX");
            return false;
        }
        $("#tbMaNV").html("Nhap thanh cong");
        return true;
    }
    $("#MaNV").blur(kiemtramaNV);

    //kiem tra email
    function kiemtraemail(){
        var mauKT = /^\w+([\.-]?\w+)*[@][v][t][v][.][c][o][m][.][v][n]/;
        if($("#Email").val()==""){
            $("#tbEmail").html("khong de trong");
            return false;
        }
        if(!mauKT.test($("#Email").val())){
            $("#tbEmail").html("Theo dang xxx@vtv.com.vn");
            return false;
        }
        $("#tbEmail").html("Nhap thanh cong");
        return true;
    }
    $("#Email").blur(kiemtraemail);

    //kiem tra tuoi 
    function kiemTraTuoi(){
        var regex = /^[1-9]\d*$/;
        if($("Tuoi").val()==""){
            $("#tbTuoi").html("Bat buoc nhap")
            return false;
        }else if(!regex.test($("#Tuoi").val())){
            $("#tbTuoi").html("Phai nhap so nguyen duong lon hon 0");
            return false;
        }else if($("#Tuoi").val()<18 || $("#Tuoi").val()>60){
            $("#tbTuoi").html("Nhap so tuoi tu 18 - 60");
            return false;
        }else{
            $("#tbTuoi").html("Tuoi hop le")
            return true;
        }
    }
    $("#Tuoi").blur(kiemTraTuoi);

    //kiem tra ngay sinh
    function kiemTraNgaySinh() {
        var input = $("#NgaySinh").val();
        if (input == "") {
            $("#tbNgaySinh").html("Bắt buộc nhập");
            return false;
        }
        var date = new Date();
        date.getDate();
        var day = new Date($("#NgaySinh").val());
        if (day > date) {
            $("#tbNgaySinh").html("Ngày sinh phải bé hơn ngày hiện tại");
            return false;
        } else {
            $("#tbNgaySinh").html("Ngày Sinh Hợp Lệ");
            return true;
        }
    }
    $("#NgaySinh").blur(kiemTraNgaySinh);

    //kiemtra SDT
    function kiemtraSDT() {
        var mauKT = /^[0]\d{2}-\d{4}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dạng 0XX-XXXX-XXX");
            return true;
        }
        $("#tbSDT").html("Số Điện Thoại Đúng Mẫu");
        return true;

    }
    $("#SDT").blur(kiemtraSDT);

    var i = 0
    $("#nhapDS").click(function(){
        if(!kiemTraTen() || !kiemtramaNV() || !kiemtraemail() || !kiemTraNgaySinh() || !kiemTraTuoi() || !kiemtraSDT()){
            $("#thongBao").html("Vui long nhap day du thong tin");
            return false;
        }
        var hoTen = $("#Name").val();
        var manv = $("#Manv").val();
        var email = $("#Email").val();
        var tuoi = $("#Tuoi").val();
        var sdt = $("#SDT").val();
        var ngaysinh = $("#NgaySinh").val();

        var row = "<tr><td>" + (++i) + "</td><td>" + hoTen + "</td><td>" + manv + "</td><td>" + email + "</td><td>" + 
            ngaysinh + "</td><td>" + tuoi + "</td><td>" + sdt + "</td></tr>";
        $("table tbody").append(row);
        $("#myModal").modal("hide");
        return true;
    })
})