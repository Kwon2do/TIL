<h1>Web storage🗃️</h1><br>


**Browser에 데이터를 저장할 수 있는 기술**<br>

웹 브라우저를 닫거나 새로고침해도 **데이터가 보존**된다.<br>


key-value 형태 저장,로컬환경에 데이터 저장<br>
* **Session Storage**(세션단위로 구분되며 활용)<br>
> **세션(Session)?**<br>
사용자가 브라우저를 통해 웹 페이지에 접속한 시점부터,
해당 웹 페이지 접속을 종료하는 시점까지를 의미하는 단위
**브라우저, 탭을 종료하면 영구 삭제**

* **Local Storage**(도메인 단위로 구분되며 활용)
http://localhost::5500/user
http://localhost::5500/category 
같은 도메인(localhost)에서는 서로 다른 엔드포인트끼리 공유가 가능
**브라우저 자체를 종료해도 존재**

~~~javascript
//localStorage에 데이터 저장
localStorage.setItem("key이름", value)
//localStorage에 저장된 데이터 읽어옴
localStorage.getItem("key이름")
~~~

**사용예시**
~~~javascript
//D-day 계산기 코드의 일부입니다.

//localStorage에 저장된 데이터를 가져옵니다.
const savedDate = localStorage.getItem('saved-date');

//만약, 저장된 데이터가 존재한다면, 그 데이터를 가지고 이어서 타이머 수행
if (savedDate) {
//저장된 savedDate를 불러와서 재가동
  starter(savedDate);
} else {
  container.style.display = 'none';
  messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';
}

//data는 사용자의 input(날짜)
const counterMaker = function (data) {
//localStorage에 있는 값과 일치하는지 비교
  if (data !== savedDate) { 
    localStorage.setItem('saved-date', data);
  }
//만약 다르다면 갱신
~~~

<h1>innerText / innerHTML / textContent</h1>

<h2>innerText</h2>

**공백 포함X(하나의 공백은 포함될 수도 있지만 여러 번의 띄어쓰기도 1번의 띄어쓰기로 간주된다.)**, **숨겨진 텍스트 미포함**<br>(화면에 보여지는대로만 가져옴)<br>
<h2>textContent</h2>

**공백 포함 & 숨겨진 텍스트(display:none) 포함**<br>

<h2>innerHTML</h2>

해당 태그 안에 있는 **HTML 전체 내용**을 가져옴,
**역으로 javascript에서 태그를 활용해서 속성 설정도 가능!**

<h2>ul vs ol</h2>

**ul태그**는 순서없이 글머리 기호로 리스트 내용을 보여줌<br>
**ol태그**는 앞에 인덱스가 붙음

---

<h2>DOM(Document Object Model)</h2>

브라우저가 **HTML 문서를 파싱**하는 과정에서 생겨나는 **객체**
<img src="DOM_tree.png">

붉은색 element 노드<br>
파란색 text 노드<br>
보라색 attribute 노드<br>

우리는 HTML 문서 자체가 아니라, **HTML 문서를 읽어와서 생겨난 DOM객체**,
그리고 그 **DOM객체 내부에 존재하는 속성들을 가지고 HTML 내부에 존재하는 내용들을
조작**할 수 있는 것.


<h2>JS로 HTML 태그 생성</h2>

**document.createElement('생성할 element')**

**appendChild(추가하고 싶은 태그)**<br>
태그 안에 자식 태그를 추가해주고 싶을 때

**예시 코드**
~~~javascript
const keyCodeCheck = function () {
    if (window.event.keyCode === 13 && todoInput.value !== '') {
        const todoList = document.querySelector('#todo-list');
        const newLi = document.createElement('li');
        const newSpan = document.createElement('span');

        newSpan.textContent = todoInput.value;
        newLi.appendChild(newSpan);
        todoList.appendChild(newLi);
        todoInput.value = '';
    }
};
~~~

