const ph1 = document.getElementById("ph1");
const ph2 = document.getElementById("ph2");
const ph3 = document.getElementById("ph3");
const send_Button = document.getElementsByClassName('btn');
ph1.addEventListener("input",() => {
    if(ph1.value.length===3) {
        ph2.focus();
    }
});

ph2.addEventListener("input",() => {
    if(ph2.value.length===4) {
        ph3.focus();
    }
});

ph3.addEventListener("input",() => {
    if(ph3.value.length===4) {
        send_Button.setAttribute("disabled", false);
    }
});

send_Button.addEventListener('click', ()=>{
    alert("아오");
})