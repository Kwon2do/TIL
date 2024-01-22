<h1 style="background-color:#DCFFB7;color:black;border-radius:5px;width:100%">객체 값으로 DOM 활용</h1>

~~~javascript
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
~~~

위와 같이 객체 안에 DOM 요소를 값으로 사용하였고, 보다 직관적이고 효율적인 코드 작성을 할 수 있었다.

---
<br>
<h1 style="background-color:#FFBB64;color:black;border-radius:5px;width:100%">
setAttribute / removeAttribute</h1>

요소의 속성을 제어하기 위한 메서드로
**setAttribute**, **removeAttribute**가 있다.

~~~javascript
//send_Button의 disabled속성을 false로 변경
send_Button.setAttribute("disabled", "false");
//send_Button의 disabled속성을 제거
send_Button.removeAttribute("disabled");
~~~
---
<br>
<h1 style="background-color:#FF6868;color:black;border-radius:5px;width:100%">
setInterval / clearInterval</h1>

~~~javascript
const timer_run = () => {
    timer.innerText = "3:00";
    timeInterval = setInterval(() => {
        const result = count_down();
        //count_down함수가 0을 반환했을 때(조건)
        if (result === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}
~~~

기본적으로 setInterval 메서드는 정해진 일정 시간마다 콜백함수를 호출하는 메서드임.

**특정 조건에 해당되면 setInterval의 콜백함수 호출을 중단하고 싶은 문제가 발생**함.

**해결방법**<br>

* 현재 내가 정의한 setInterval 함수를 변수에 저장해준다.

* 특정 조건이 성립되면, clearInterval(저장한 변수) 메서드를 호출한다.

---
<br>

<h1 style="background-color:#7BD3EA;color:black;border-radius:5px;width:100%">
hasOwnProperty / getComputedStyle</h1>

~~~javascript
function pass() {
    //순회
    for (const key in error) {
        //속성 존재여부 확인
        if (error.hasOwnProperty(key)) {
        const element = error[key];
        //인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신
        if (getComputedStyle(element).display !== "none") {
            return false;
            }
        }
    }
    return true;
}
if (pass()) {
    //새로고침
    location.reload(true);
}
~~~

* **for (const key in error)**<br>
error 객체 안에 있는 key를 순회한다.

* **hasOwnProperty(key)**<br>
해당 객체에 특정 프로퍼티(key)가 존재하면 true, 그렇지 않으면 false 를 반환한다.

* **getComputedStyle(element)**<br>
getComputedStyle() 메소드는 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신합니다.