<h1>중첩 객체에서의 깊은 복사</h1>

**JSON stringify , parse를 통해 객체의 깊은 복사가 가능하다.**
~~~javascript
const obj = {
	name: "otter",
	gender: "male",
  favoriteFood: {
		first: "sushi",
		second: "hamburger"
  }
}

const copy = JSON.stringify(obj)

console.log(copy)
// {"name":"otter","gender":"male","favoriteFood":{"first":"sushi","second":"hamburger"}}
~~~

위의 예시처럼 문자열로 변환이 된다면, **copy에 담긴 값은 더이상 객체가 아니며 완전히 새로운 문자열이기 때문에 전혀 새로운 주소값을 가지게 된다**.

~~~javascript
const deepCopy = JSON.parse(copy)

console.log(deepCopy)

/*
	{
		name: "otter",
		gender: "male",
	  favoriteFood: {
			first: "sushi",
			second: "hamburger"
	  }
	}
*/
~~~

이후, **JSON.parse()** 를 사용해서 **JSON 데이터 포맷을 다시 객체 형태로** 바꿔주면,

이때 **새로운 객체가 생성되며 deepCopy에 담기는 것이기 때문에 원본 객체와는 전혀 다른 주소값을 가진 객체가 생성**되는 것이다!

이러한 복사를 **깊은 복사**라고 부른다.

---

<h1>Rest Parameter</h1>

rest parmeter는 함수의 매개변수(parameter)를 배열로 전달 받는 방식이다.

~~~javascript
let orgin = {
	name : "otter",
	age : 25.
	petName : "cherry",
	hobby: "playing game"
}; 

const { petName, hobby, ...rest} = origin
console.log(petName); // cherry
console.log(rest); // {name:"otter", age:25}
~~~
**참고로, 꼭 변수명이 rest가 아닌 다른 변수명이라 해도 똑같이 작동함.**

함수에서도 아래 코드와 같이 유용하게 사용될 수 있음.
~~~javascript
const foo = function(one, two, ...rest) {
	console.log(rest)
}
//첫 번째 원소, 두 번쨰 원소를 제외한 나머지(배열)
foo(1, 2, 3, 4, 5) // [ 3, 4, 5 ]
~~~

---

❗️ **rest parameter 주의사항**<br>
rest parameter를 작성할 때는 **반드시 마지막에 위치**해야 합니다.

**<잘못된 예시>**
~~~javascript
const foo = function(one, ...rest, two) {
   console.log(rest)
}
~~~

---

<h1>구조분해할당 활용</h1>

~~~javascript
const accessToGeo = (position) => { 
    const positionObj = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };
}
~~~

구조분해할당을 사용해서 **position이라는 매개변수 값을 받아와서 바로 coords에 접근 할 수 있다.**<br>

~~~javascript
const accessToGeo = ({coords}) => { 
    const { latitude , longitude } = coords;
    const positionObj = {
        latitude: latitude,
        longitude: longitude
    };
    
    weatherSearch(positionObj);
} 
~~~

--- 

<h1>짜잘한 기타 지식들</h1>

* background-image : url('이미지주소');<br>
**배경 이미지를 설정할 수 있다.**
* text-shadow 그림자
**글씨 그림자 효과를 설정할 수 있다.**
* opacity 투명도
**투명도를 설정할 수 있다.**
* 버튼 클릭 시, 클릭감 모션 주는 법<br>
~~~css
.delete-btn-wrapper button:active {
    box-shadow : none;
    margin-left: 3px;
    margin-top: 3px;
}
~~~