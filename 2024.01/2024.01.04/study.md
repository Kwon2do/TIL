<h1>2024.01.04(목)</h1>

> <strong>CSS 등장 배경📚</strong> <br>
HTML은 너무나도 중요하기 때문에 **HTML이 정보에 전념하기 위해서**,
HTML로부터 **디자인에 대한 기능을 뺏어온 것**이 CSS라고 할 수 있다.
또한, **CSS언어를 사용하면** html로 웹 페이지를 디자인하는 것보다 **훨씬 효율적**이기에 도입한 것.
---

> <strong>선택자(Selector)란 무엇인가?</strong><br>
**선택자(tag,Class,Id)**<br> 

~~~javascript
<a href="2.html"class="saw active">css</a>
~~~
class명은 **띄어쓰기로 구분**한다!<br>
saw와 active **두 개의 클래스 속성에 영향**을 받는 것<br>
별로 **좋은 습관은 아니다**.(나중에 나온 것이 최종 적용됨) 
-> <span style="color:powderblue">**ID이용(중복 절대X)**</span>
<p style="border:1px green solid">
tag(=element)선택자는 그냥 태그명<br>
class선택자는 .<br>
id선택자는 # <br>
</p>

<strong style="background-color:green">tag선택자는 class선택자보다 우선순위가 낮고, class선택자는 id선택자보다 우선순위가 낮다.</strong>
---

> <strong>박스모델에 대한 이해</strong><br>
**html 태그 하나하나를 박스로 생각해서 부피감을 생각**하는 것.
~~~javascript
    /*
    block level element
    */
  h1 {
        border-width: 5px;
        border-color: red;
        border-style: solid;
     /* display:inline; inline element로 변경 */
    }

    /*
    inline element(컨텐츠 크기만큼 부피를 가짐)
    */
    a {
        border-width: 5px;
        border-color: blue;
        border-style: solid;
    }

위 코드를 콤마(,)를 사용해서 중복 제거 가능
  h1,a {
        border-width: 5px;
        border-color: red;
        border-style: solid;
    }
위 코드를 다시 한번 축약 가능
  h1,a {
	border:5px solid red; //순서 중요X
    }
~~~

텍스트에 살 붙이는 것 **padding** <br>
텍스트+padding을 감싸는 테두리 **border** <br>
border의 여백 공간을 **margin** <br>

---