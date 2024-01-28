<h1>2024.01.21(일)</h1>

<img src="./img.png">


<h2>ComboBox 생성</h2>

~~~html
<div class="wrapper__body__select">
    <select name="region" id="region">
        <option value="지역을 입력하세요." disabled="true" selected="true">지역을 선택하세요.</option>
        <option value="서울">서울</option>
        <option value="경기">경기</option>
        <option value="인천">인천</option>
    </select>
</div>
~~~ 

**select-option** 태그를 사용한다.<br>

**disabled="true"** 와 **selected="true"** 속성을 사용함으로써, 최초로 선택된 항목이지만 재선택 불가하도록 구현함.

---

<h2>옵션 버튼(radio) 생성</h2>

~~~html
<div class="wrapper__body__gender">
    <form>
        <label>
            <input type="radio" class="gender__type" name="gender" value="female"> 여성
        </label>
        <label>
            <input type="radio" class="gender__type" name="gender" value="male"> 남성
        </label>
    </form>
</div>
~~~

옵션 중 하나만 선택되도록 하려면 하나의 그룹으로 묶어줘야한다.<br>
css속성에서는 **form** 태그선택자를 사용해서 옵션간의 간격 등을 수정할 수 있다. 

---
<h2>🔴오류</h2>

Button css속성으로 인한 오류<br>
**boder:1px solid #0068FF;**<br>
이 부분 때문에 버튼 클릭이 계속 비활성화 됨.<br>