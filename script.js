function encrypt(){
    var frase = document.getElementById("encriptedText").value.toLowerCase();
    
    var encryptedText = frase.replace(/e/img, "enter");
    var encryptedText = encryptedText.replace(/o/img, "ober");
    var encryptedText = encryptedText.replace(/i/img, "imes");
    var encryptedText = encryptedText.replace(/a/img, "ai");
    var encryptedText = encryptedText.replace(/u/img, "ufat");

    document.getElementById("desencriptedText").innerHTML = encryptedText;
    document.getElementById("copyButton").style.display = "show";
    document.getElementById("copyButton").style.display = "inherit";
}

function desencrypt(){
    var frase = document.getElementById("encriptedText").value.toLowerCase();
    
    var encryptedText = frase.replace(/enter/img, "e");
    var encryptedText = encryptedText.replace(/ober/img, "o");
    var encryptedText = encryptedText.replace(/imes/img, "i");
    var encryptedText = encryptedText.replace(/ai/img, "a");
    var encryptedText = encryptedText.replace(/ufat/img, "u");

    document.getElementById("desencriptedText").innerHTML = encryptedText;
}

function copy(){
    var content = document.getElementById("desencriptedText");
    var input = document.getElementById("encriptedText");
    input.value = content.innerHTML;
    input.select();
    document.execCommand("copy");
}
  
const textRegex = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;

function validateField(){
    const userInput = document.getElementById('encriptedText').value;
    const validText = textRegex.test(userInput);
    const encriptedButton = document.getElementById('encryptButton');
    encriptedButton.disabled = !validText;
    return validText;
}

function validateInput() {
    const userInput = document.getElementById('encriptedText').value;
    const validText = textRegex.test(userInput);
    const inputError = document.getElementById('input-error');
    if(!validText)
        inputError.style.display = 'block';
    else
        inputError.style.display = 'none';
}