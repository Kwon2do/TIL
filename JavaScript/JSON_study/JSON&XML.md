<h1>2024.01.09(화)</h1>

<ul>

<li>

**JSON 탄생 배경**
<br>
<li>

**JSON 소개**

<li>

**JavaScript에서의 사용**
</ul>

---
<h2 style="background-color:powderblue; color:black">JSON 탄생 배경</h2>

브라우저 위에서 동작하고 있는 **Client(웹 사이트 웹 어플리케이션)** 들이 **어떻게 Server와 통신할 수 있는 지를 정의**한 것이 바로 <strong style="color:skyblue">HTTP</strong>이다.

<p style="border:solid"> 
<strong>AJAX(Asynchronous Javascript And XML)</strong><br>
웹페이지에서 동적으로 서버에게 데이터를 주고받을 수 있는 기술을 의미한다.
<strong>XHR(XMLHttpRequest)</strong>는 이를 가능하게 하는 자바스크립트 객체이다.<br>
앞에 XML이 붙은 것은 그저 개발자가 XML을 사용했기 때문이고, 실제로는 XML뿐만 아니라, 다양한 타입의 데이터를 주고받을 수 있다.(객체명의 중요성!)
</p>

> **XML**<br>
XML언어는 HTML과 마찬가지로 마크업 언어 중 하나이다.
---
서버와 통신하기 위한 방법으로<br>
1. XMLHttpRequest
2. fetch() API(신)

**XML 사용**= 불필요한 태그들이 많아 가독성이 떨어짐

=> <span style="color:skyblue; font-weight:bold">JSON</span>을 사용하게 되었다.


<h2 style="background-color:powderblue; color:black">JSON 소개</h2>

> <strong>JSON이란?</strong><br>
JavaScript Object Notation의 약자로,
Json도 자바스크립트 객체 문법과 동일하게<br>
**object { key : value}** 로
이루어져 있다.

<strong>JSON 특징</strong><br>
* 데이터를 주고 받는 것이 **가장 단순**한 형태
* 텍스트를 기반으로한 **가볍고, 가독성**이 뛰어남
* 데이터를 직렬화(serialization)하고, 전송할 때 사용됨
* <div style="color:skyblue; font-weight:bold">프로그래밍 언어&플랫폼에 상관없이 사용 가능<div>

---

<h2 style="background-color:powderblue; color:black">JavaScript에서의 사용</h2>

* **How to serialize?** Object->JSON(Parse 메서드)
* **How to Deserialized?** JSON->Object(Stringify 메서드)

Parse 과정이나, Stringify 과정에서 조건을 달아서 추출이 가능하다.**(배열 or 콜백함수 이용)**<br>

**유용한 웹사이트**

**JSON Diff.com(문제 디버깅용)**<br>
서버에게 요청했을 때 1번째로 받아온 데이터와 2번째로 받아온 데이터가 어떤게 다른지 모를 때 비교할 수 있음.

**JSON Beautifier**<br>
JSON 포맷을 예쁘게 만들어 줌.

**JSON Parser**<br>
JSON타입을 Object형태로 미리 확인 가능.

**JSON Validator**<br>
유효한 JSON 데이터인지 확인 가능(오류 없는지 체크)