let imgsrc=document.getElementById("imgsrc");
let im=document.getElementById("imgr");
let val=document.getElementById("gettext")
 function QR(){
    if(val.value!=""){
    imgsrc.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"+val.value;
    im.classList.add('show');
     } else 
    alert("enter some text");
}
