let emailInput = document.getElementById('ContactFooter-email');

let subscribeBtn = document.getElementById('btnSubscribe');

subscribeBtn.addEventListener('click', ()=> {
    let emailValue = emailInput.value;
    let indexOfAt = emailValue.indexOf("@");
    if (indexOfAt == -1) {
        alert ("Please enter a valid email address.")
    }
    else {
        alert ("You have subscribed.");
    }

} )
    