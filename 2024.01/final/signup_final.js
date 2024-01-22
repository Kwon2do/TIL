const email = document.querySelector("#email");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const ph1 = document.getElementById("ph1");
const ph2 = document.getElementById("ph2");
const ph3 = document.getElementById("ph3");
const send_Button = document.querySelector('.identity__send');
const number = document.querySelector('.identity__number');
const number_check = document.querySelector('.identity__success');
const timer = document.querySelector('.identity__timer');
const join = document.querySelector('.btn');
let timer_h_s = []; //timer 분/초를 저장할 배열
let timeInterval; //clearInterval 목적
const gender = {
    female: document.querySelector('#female'),
    male: document.querySelector('#male')
}
//error 메시지가 담긴 요소를 값으로 활용
const error = {
    email: document.querySelector('#error__email'),
    name: document.querySelector('#error__name'),
    password: document.querySelector('#error__password'),
    password2: document.querySelector('#error__password2'),
    gender: document.querySelector('#error__gender'),
};

ph1.addEventListener("input", () => {
    if (ph1.value.length === 3) {
        ph2.focus();
    }
});

ph2.addEventListener("input", () => {
    if (ph2.value.length === 4) {
        ph3.focus();
    }
});

//핸드폰 끝자리까지 채워졌을 때 발생하는 이벤트
function ph3_input() {
    if (ph3.value.length === 4) {
        // 클래스로 특정 요소 선택을 위해 querySelector를 사용합니다.
        send_Button.removeAttribute("disabled");
        send_Button.style.backgroundColor = "#0068FF";
        send_Button.style.color = "#FFFFFF";
        send_Button.style.cursor = 'pointer';
    }
    if (ph3.value.length < 4) {
        send_disabled();
        send_Button.style.color = "#0068FF";
    }
}

//인증번호 전송버튼 비활성화
const send_disabled = () => {
    send_Button.style.color = "gray";
    send_Button.style.backgroundColor = "#FFFFFF";
    send_Button.disabled = "true";
    send_Button.style.cursor = 'auto';
}

//인증확인 버튼 비활성화
const number_check_disabled = () => {
    number_check.style.backgroundColor = "#FFFFFF";
    number_check.style.color = "gray";
    number_check.style.cursor = 'auto';
    number_check.disabled = "true";
}

//인증확인 버튼 클릭 시 발생하는 이벤트
number_check.addEventListener('click', () => {
    alert("인증 확인되었습니다!");
    timer.innerText = "3:00";
    send_disabled();
    number_check_disabled();
    number_check.innerText = "인증 완료";
    number.innerText = "000000";
    clearInterval(timeInterval); //
    join.removeAttribute("disabled");
});

//랜덤 인증번호 생성(6자리가 안되면 앞에서부터 0으로 채우도록)
const random_Number = () => {
    number.innerText = String(Math.ceil(Math.random() * 1000000)).padStart(6, "0");
    timer_run();
    check();
}

//인증 확인 버튼 활성화(전송버튼 누르면 발생)
const check = () => {
    number_check.style.backgroundColor = "#0068FF";
    number_check.style.color = "#FFFFFF";
    number_check.style.cursor = 'pointer';
    number_check.removeAttribute("disabled");
    send_Button.style.color = "gray";
    send_Button.style.backgroundColor = "#FFFFFF";
    send_Button.style.color = "#0068FF";
}

//전송버튼 눌렀을 때 타이머 동작
const timer_run = () => {
    timer.innerText = "3:00";
    timeInterval = setInterval(() => {
        const result = count_down();
        if (result === 0) { //0:00초가 되면 timer 중지
            clearInterval(timeInterval);
        }
    }, 1000);
}

//타이머 내부 동작
const count_down = () => {
    timer_h_s = timer.innerText.split(":");
    parseInt(timer_h_s[0]);
    parseInt(timer_h_s[1]);
    if (timer_h_s[0] == "0" && timer_h_s[1] == "00") {
        // 0:00일 때 함수 종료
        number_check_disabled();
        timer.innerText = "3:00";
        number.innerText = "000000";
        send_Button.removeAttribute("disabled");
        send_Button.style.backgroundColor = "#0068FF";
        send_Button.style.color = "#FFFFFF";
        send_Button.style.cursor = 'pointer';
        return 0;
    }
    if (timer_h_s[1] == "00") {
        if (timer_h_s != "0") {
            timer_h_s[1] = 59;
            timer_h_s[0] = timer_h_s[0] - 1;
        }

    }
    else {
        timer_h_s[1]--;
    }

    timer.innerText = timer_h_s[0] + ":" + String(timer_h_s[1]).padStart(2, "0");
}

//최종적으로 가입버튼 눌렀을 때 이벤트 처리
function signup() {
    //정보입력 검사
    if (email.value == "") {
        error['email'].style.display = "block";
    }
    else if (email.value != "") {
        error['email'].style.display = "none";
    }
    if (name.value == "") {
        error['name'].style.display = "block";
    }
    else if (name.value != "") {
        error['name'].style.display = "none";
    }
    if (password.value == "") {
        error['password'].style.display = "block";
    }
    else if (password.value != "") {
        error['password'].style.display = "none";
    }
    if (password2.value == "") {
        error['password2'].style.display = "block";
    }
    else if (password2.value != "") {
        error['password2'].style.display = "none";
        //조건1. 비밀번호 일치 여부
        if (password.value != password2.value) {
            error['password2'].value = "비밀번호가 일치하지 않습니다.";
            error['password2'].style.display = "block";
        }
        else {
            error['password2'].style.display = "none";
        }
    }

    //지역 선택여부 검사 
    if (document.querySelector('#init__select').selected) {
        error__region.style.display = "block";
    }
    else {
        error__region.style.display = "none";
    }
    //성별 선택여부 검사
    if (!gender['female'].checked && !gender['male'].checked) {
        error['gender'].style.display = "block";
    }
    else if (gender['female'].checked || gender['male'].checked) {
        error['gender'].style.display = "none";
    }

    //이메일 형식 검사
    if (!(email.value.includes("@"))) {
        error__email.value = "이메일 형식이 올바르지 않습니다"
        error__email.style.display = "block";
    }
    else {
        error__region.style.display = "none";
    }

    //모든 조건을 만족하는 경우
    function pass() {
        for (const key in error) {
            if (error.hasOwnProperty(key)) {
                const element = error[key];

                if (getComputedStyle(element).display !== "none") {
                    return false;
                }
            }
        }
        return true;
    }
    if (pass()) {
        location.reload(true);
    }
}