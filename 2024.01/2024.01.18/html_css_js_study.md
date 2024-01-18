<h1>2024.01.18(목)</h1>

<h2 style="color:#55B2E4">HTML</h2>

**placeholder**="문자열"<br>
텍스트창에 입력하기 전에 안내 문구같은 것. (사용자가 입력 시, 사라짐)

**div 태그**는 **가로 너비 전체를 차지**함.
**span 태그**는 **inline요소라서 딱 자기 너비만큼만 차지**함.
**hr 태그**는 줄바꿈 + **구분선**

input태그의 기본값은 text이다.<br>
radio타입 : 둘 중 하나 선택하는 것<br>
(그룹(name)으로 묶어줘야 하나만 선택이 된다. 아니면 중복선택됨)

**select태그** 무언가를 선택할 때 <br>
태그 안에 여러가지 옵션(o**ption태그를 종속태그로 사용**)들을 작성
~~~html
 <option disabled="true" selected="true">지역을 선택하세요</option> 
~~~
비활성화시키고, 처음에 선택되어있도록<br>

**input태그를 사용한 button** VS **button태그를 사용한 button**

input태그 사용하면 디자인에 자유롭지 못함(안쓰는 것이 좋음)

**참고) 컨트롤 + ? 누르면 주석처리**.

---

<h2 style="color:#55B2E4">CSS</h2>

**적용방법**
* html에서 style 속성
* style태그 안에 내용
* ⭐css파일을 불러오는 방법⭐
~~~HTML 
<link href="./012-signup.css" rel="stylesheet">
~~~
**rel**은 그냥 **html과의 관계를 정의**해주는 것.

태그,class,id외에 **전체 선택자(*)** 도 있음.

---

<strong style="color: powderblue">박스모델 화면 표시 방법</strong>

* **border-box**<br> (압도적으로 편하지만, 기본적으로 content-box로 선언되어있어서 바꿔주고 시작)<br>
border가 고정되고, contents의 크기가 변함<br>
가장 바깥이 되는 테두리의 사이즈를 미리 정해놓고 안쪽에 있는 내용은 패딩에 따라서 변하기때문에 전체적인 그림틀이 변하지않음.
* **content-box**<br>
contents가 고정되고, border의 크기가 변함(padding조절) 

**화면 정렬 시**, 가장 자주 사용하는 방법

1.⭐Flex⭐

<img src="./flex.png">

2.Position

3.Grid(실무 비중 낮음)

**Flex**
정렬을 할 때는 항상 컴퓨터에게 **기준을 알려줘야 함**.
그 기준을 **부모박스**라고 하고, **부모 박스에 flex 속성을 넣어준다**. <br>

자식박스 나열 방향 : flex-direction<br>
나열방향 row라는 가정 하에<br>
부모박스의 '가로'를 기준으로 가운데 정렬 : justify-content : center;<br>
부모박스의 '세로'를 기준으로 가운데 정렬 : align-items : center;<br>
나열방향이 column이면 반대가 됨.<br>

**flex-direction과 justify-content는 항상 같은 방향이고,<br>
flex-direction과 align-items는 항상 수직 방향이다.**

**justify-content, align-items 옵션**
* space-between(아이템 사이에 균일 간격 정렬), space-around(아이템 둘레에 균일 간격 정렬) space-evenly(사이, 양 끝에 균일 간격 정렬) 등이 있다.<br>

**Position**
박스를 **개별적으로 어디에 위치하게 할 것인지 지정**해주는 것<br>
옵션으로는<br>
Absolute(박스의 절대위치)<br>
Relative(부모 박스 기준으로 상대 위치)<br>
Fixed(화면 기준으로 절대 위치)<br>

absolute는 그 페이지 자체의 절대적인 위치를 지정하는 것이고,<br>
fixed는  화면을 기준으로 하는 것(모바일 화면 하단에 내비게이션 바와 같이 고정되어 있어야하는 것)<br>

여백을 주는 방법<br>
padding(내부여백), margin(외부여백), position 지정<br>

padding: 20px 0px 0px 20px; (위20px 왼20px 시계방향으로)<br>

image 삽입<br>
html에서 image태그 또는 css에서 background-image<br>
image태그가 자유롭고 css에서는 태그에 이미지를 박는 느낌(정적)<br>

---

<h2 style="color:#55B2E4">JavaScript</h2>

이름중복(재선언)&재할당 가능여부<br>
var         O          O<br>
**let**      X          O<br>
**const**       X          X<br>

실무에서는 **var를 거의 쓸 일이 없다**.<br>

자바스크립트에서는 
변수 선언시, 소문자로 시작하고 단어별로 대문자를 넣는다(Ex myMoney)<br>

**배열**<br>
배열 맨 뒤에 값 추가 **push**<br>
배열 맨 마지막 값 삭제 **pop**<br><br>
배열 데이터 확인 **includes(값)** - return boolean<br>
배열 2개 연결 **concat(array2)**<br>
배열을 문자로 만들기 **join** - 인자로 특정 문자 전달하면 , 각 문자마다 함께 출력됨<br>
배열 분리 **slice**<br>
배열에서 원하는 요소 뽑기 **filter**<br>
배열의 모든 요소 변경 **map**<br>

Tip<br>
let array = "dohun_1@naver.com"<br>
let userMail = array.split("@")[0]<br>
userMail : dohun_1<br>

---

변경되는 부분만 여러페이지 제작해서 사용 -> **iframe 태그**
