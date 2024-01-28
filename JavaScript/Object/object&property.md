<h1>2024.01.16 TIL</h2>

자바스크립트 문법과 개념 지식에 대해서 깊이있게 공부하고자 학습을 시작함.

* 객체 기초
* 객체 리터럴
* 프로퍼티 접근
* 프로퍼티 동적 생성 및 삭제
* ES6 객체 리터럴의 확장 기능

---

<h2>객체 기본 지식</h2>

자바스크립트에서의 **객체**는 **프로퍼티와 메서드로 구성**된다.

~~~javascript
var person = {
    name : "dohun",
    sayHello() {
        console.log('Hello ${this.name}');
    } //1번
    sayHello : function() {
        console.log('Hello ${this.name}');
    } //2번
};
~~~ 

위 코드에서, <br>
<span style="background-color:yellow; color:black; font-weight:bold">name : "dohun"</span><br>
**프로퍼티 키**가 name, **프로퍼티 값**이dohun인 **프로퍼티**이다.<br>

<span style="background-color:yellow; color:black; font-weight:bold">sayHello : function() {...}</span><br>
프로퍼티의 값이 함수일 경우, 일반 함수와 구분하기 위해서 이를 **메서드**(ES6부터는 1번과 같이 축약형으로 작성된 프로퍼티를 말함)라고 부른다.


> 이전에는 프로퍼티가 키를 말하는건지, 값을 말하는 건지 헷갈렸는데 프로퍼티 개념에 대해서 정확하게 알게 되었다. 

<h2>객체 리터럴</h2>

자바스크립트는 **프로토타입** 기반 객체지향 언어로서, 클래스 기반 객체지향 언어(C++, Java)와는 달리 **다양한 객체 생성 방법**이 있음.

* 객체 리터럴
* Object 생성자 함수
* 생성자 함수
* Object create 메서드
* 클래스(ES6)

>**리터럴이란?**<br>
사람이 이해할 수 있는 문자 또는 약속된 기호를 사용하여 값을 생성하는 표기법을 말한다.<br>
**객체 리터럴 = 객체를 생성하기 위한 표기법**

객체 리터럴에서는 중괄호 내에 0개 이상의 프로퍼티를 정의. <br>

🔴객체 리터럴의 중괄호는 **코드 블럭을 의미X, 값으로 평가되는 표현식**, 따라서 **세미콜론 필수** 

프로퍼티 키는 **식별자 네이밍 규칙**을 따르면 좋지만, **따르지 않는 경우 반드시 따옴표를 사용해야 한다.**

>**식별자 네이밍 규칙**
* 식별자는 특수문자를 제외한 **문자, 숫자, 언더스코어(_), 달러 기호($)를 포함할 수 있다**.
* 단, 식별자는 특수문자를 제외한 **문자, 언더스코어(_), 달러 기호($)로 시작**해야한다. (**숫자 시작 허용X**)
* **예약어는 식별자로 사용 불가**
>>**예약어**<br>
프로그래밍 언어에서 사용되고 있거나, 사용될 예정인 단어를 말함.(await, break, catch ...)

~~~javascript
//프로퍼티 추가 예제코드
var person = {
    name : "dohun",
     //네이밍 규칙X 
    'kr-1' : "not"
};
var plus = "Kwon";
//person객체에 프로퍼티 추가(key="Kwon", value="dodo")
person[plus] = "dodo"; 
~~~
**이미 존재하는 프로퍼티 키를 중복 선언 시, 나중에 선언한 프로퍼티가 덮어씀(에러발생X)**

---

<h2>프로퍼티 접근</h2>

프로퍼티 키가 **식별자 네이밍 규칙을 준수한다는 가정 하에**,
프로퍼티 접근 방법은 2가지이다.<br>
* 마침표 프로퍼티 접근 연산자 사용(마침표 표기법)
* 대괄호 프로퍼티 접근 연산자(대괄호 표기법) 

~~~javascript
var person = {
    name : 'Lee',
};
//마침표 표기법에 의한 접근
console.log(person.name): //Lee
console.log(person['name']); //Lee
~~~

위에서 알 수 있듯이, **대괄호 표기법**에 의한 프로퍼티 접근 시, 대괄호 안에 들어가는 프로퍼티 키는 **반드시 따옴표로 감싼 문자열**이어야 한다.

만약, 따옴표로 감싸지 않으면 자바스크립트 엔진은 식별자로 인식을 한다.
~~~javascript
var prop = 'name';
//prop을 식별자로 인식해서 읽어옴
console.log(person[prop]);
//Lee 출력
~~~


<h2>프로퍼티 동적 생성 및 삭제</h2>

* 프로퍼티 동적 생성

    **존재하지 않는 프로퍼티에 값을 할당하면**, 프로퍼티가 **동적으로 생성되어 추가되고 프로퍼티 값이 할당된다.**

    ~~~javascript
    var person = {
        name : 'Lee'
    };
    person.age = 20;
    //person객체에는 age 프로퍼티가 존재하지 않지만, 동적으로 생성 후 값 할당
    ~~~

* 프로퍼티 삭제

    **delete 연산자는 객체의 프로퍼티를 삭제**한다.<br>
    만약, 존재하지 않는 프로퍼티를 삭제하려고 하면 그냥 무시됨(에러X)
    ~~~javascript
    var person = {
        name : 'Lee'
    };
    person.age = 20;
    //age프로퍼티가 삭제된다.
    delete person.age;
    //address프로퍼티는 존재X -> 무시된다(에러X)
    delete person.address;

    console.log(person);
    //{name: "Lee"}

<h2>ES6 객체 리터럴의 확장 기능</h2>

ES6에서는 더욱 간편하고, 표현력 있는 **객체 리터럴의 확장 기능**을 제공

* **프로퍼티 축약 표현**<br>
만약, **프로퍼티 값으로 변수를 사용하는 경우** **변수 이름과 프로퍼티 키가 동일한 이름**일 때 **프로퍼티 키를 생략** 가능

    ~~~javascript
    //기존 방식
    var x = 1, y = 2;
    var obj = {
        x : x,
        y : y
    };
    console.log(obj); // {x:1, y:2}

    //ES6 축약형
    var obj = {x, y};
    console.log(obj); // {x:1, y:2}
    ~~~ 

* **계산된 프로퍼티 이름**

    **프로퍼티 키로 사용할 표현식을 대괄호**로 묶어야 함.
    그러나, ES6에서는 객체 내부에서 동적 생성이 가능.
    ~~~javascript
    //기존 방식
    var prefix = 'prop';
    var i = 0;

    var obj = {};

    obj[prefix + '-' + ++i] = i;
    obj[prefix + '-' + ++i] = i;
    obj[prefix + '-' + ++i] = i;
    console.log(obj);
    //{prob-1: 1, prop-2: 2, prop-3: 3}
    ~~~
    ~~~javascript
    //ES6 방식
    const prefix = 'prop';
    let i = 0;

    var obj = {
        ['${prefix}-${++i}'] : i,
        ['${prefix}-${++i}'] : i,
        ['${prefix}-${++i}'] : i
    };
    console.log(obj);
    //{prob-1: 1, prop-2: 2, prop-3: 3}
    ~~~
