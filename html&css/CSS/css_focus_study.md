<h1>2024.01.19(금)</h1>

이전까지 프로젝트를 진행하면서,<br> html과 css의 기초가 탄탄하지 않은 느낌을 많이 받았었다.<br>
이번에 **인프런 CodeCamp** 강의를 통해 **간단한 싸이월드 홈페이지 제작 실습**을 진행하면서 **html의 구조**와 **css 활용**에 대해서 많이 익숙해지면서, 눈에 잘 보이는 것 같다.

---

**CSS**에서 가장 중요하게 느껴진 부분은 **"박스(Box)"** 이다. <br>

만약 내가 하나의 웹 페이지를 봤을 때, 또는 제작하려고 할 때 어떠한 박스로 이루어져 있는지 파악하는 능력이 CSS에서 절대적으로 중요하다라고 느꼈다.

박스 구조를 파악할 수 있어야 html 코드도 효율적이고, 깔끔하게 작성이 가능하다.

<img src="./cyworld.png">

전체 페이지에서 header,body를 구분한 후

header 안에서도 또 title, subtitle 등으로 나누어지는 것을 확인할 수 있다.

이렇게 박스 구조를 잘 파악해서 html 코드를 작성하면 CSS 코드의 효율적이고, 오류 발생 가능성이 낮은 작성 당연히 따라오게 된다.

---

**추가로 알게된 점**

**String.padStart(6,"0")**<br>
6자리가 안되면 앞을 0으로 채워라.

**DOM(Document Object Model)** 
html에 있는 요소들과 상호작용 할 수 있도록 하는 것<br>
Ex)<br>**document.getElementById**("tagID").InnerText

**정렬을 하려는데 원하는대로 움직이지 않는다?**<br>
부모 태그의 사이즈가 올바르게 지정되어있는지 체크해본다.

**space-between**로 끝과 끝으로 찢어주고,
상하좌우 **padding** 줘서 조절하는 방법

**setTimeout(func,time)**<br>
시간 지연 함수<br>
**setInterval(func,time)**<br>시간 반복 함수
