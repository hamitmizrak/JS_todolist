// is delete
let isDelete=()=>{
    //alert("siliniyor");
    let isDel=confirm("Gerçekten silmek istiyor musunuz ?");
    let result= (isDel) ? "Silindi":"silinmedi !!!";
    alert(result);
}