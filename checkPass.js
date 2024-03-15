var password = "97425";
function passCheck() {
    if(document.getElementById('pass1').value != password) {
        alert('Wrong Password, Try Again.')
        return false
    }
    if(document.getElementById('pass1').value == password) {
        alert('Correct Password, Click Ok to Enter Premium Games')
    }
}
