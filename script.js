console.log("This is QR code generator mini project")

let inputText = document.getElementById("in-text");
let sizes = document.getElementById("size");
let qrContainer = document.querySelector('.qr-body');
let generatBtn = document.getElementById("generatBtn");
let downloadBtn = document.getElementById("downloadBtn");
let size = sizes.value;
let GenerateQRcode = () => {
    qrContainer.innerHTML = ""
    new QRCode(qrContainer, {
        text: inputText.value,
        height: size,
        width: size,
        colorDark: "#000000",
        colorLight: "#ffffff"
    })
}
sizes.addEventListener('change', (e) => {
    size = e.target.value;
    if (inputText.value.length > 0) {
        GenerateQRcode();
    }
})
generatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputText.value.length > 0) {
        GenerateQRcode();
    } else {
        alert("Please enter text or url")
    }
})

downloadBtn.addEventListener('click',()=>{
    let img=document.querySelector(".qr-body img");
    console.log(img)
    if(img!==null){
        let imgAttribute=img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAttribute)
    }
    else{
       alert("Plese generate QR code before download")
        
    }
})