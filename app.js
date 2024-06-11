function updateQRCode() {
    console.log('es');
    var url = document.getElementById('urlInput').value;
    var bgColor = document.getElementById('bgColorInput').value;
    var fgColor = document.getElementById('fgColorInput').value;
    var height = document.getElementById('heightInput').value;
    var width = document.getElementById('widthInput').value;
    var qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = '';
    
    qrcode = new QRCode("qrcode",{
        text: url,
        width: width,
        height: height,
        colorDark: fgColor,
        colorLight: bgColor,
        correctLevel: QRCode.CorrectLevel.H
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var qrcode = new QRCode("qrcode",{
        text: 'www.crooke.net',
        width: 128,
        height: 128,
        colorDark: '#000',
        colorLight: '#FFF',
        correctLevel: QRCode.CorrectLevel.H
    });    
    const inputs = document.querySelectorAll('#urlInput, #bgColorInput, #fgColorInput, #heightInput, #widthInput');
    inputs.forEach(input => {
        input.addEventListener('input', updateQRCode);
    });
})
