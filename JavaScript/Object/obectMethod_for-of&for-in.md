<h1>Object Method</h1>

**Object.keys(객체명)**<br> **문자열**을 담은 **배열로 반환**해준다(배열 메서드 사용가능)<br>
Ex)Object.keys(person).includes("email"); => key값에 email이 있는지 확인 가능

**Object.values(객체명)**<br>
**원본 데이터타입 그대로**를 담은 배열로 반환해준다<br>
 Ex)Object.keys(person).includes("dohun"); => value값에 dohun이 있는지 확인 가능
---

<h1>DNS(Domain Name System)</h1>

127.0.0.1 => **localhost**<br> 
IP주소를 localhost라는 도메인으로 변환시켜준 것. 

IP주소 : 대한민국 서울특별시 ~구 ~로 ~번지 ...<br>
도메인 : 김밥천국 <br>
포트 : 김밥천국을 들어가기 위한 출입문(문을 열어둔 것)<br>

일반적인 사이트들은 포트가 숨겨져있는 것임.<br>

**https**(자물쇠잠겨있는 사이트)**443**<br>
**http**(주의요함) **80**

---

<h1>배열과 객체 비교</h1>

let arr = [1, 2, 3]<br>
arr === [1,2,3] **(FALSE)**<br>
===는 **주소값까지 비교**한다. 

<h1>for-in & for-of</h1> 

~~~javascript
for (let key in documentObj) {
	console.log(key);
}
~~~
**for-in은 객체(배열도 객체임)에 사용된다.**

~~~javascript
for (let key in documentObj) {
	documentObj[key].textContent = "변경할 값";  

for (let tag of documentArr) {
	console.log(tag);
}
~~~

**for-of는 배열에서 자주 사용됨**.(배열 요소 순회)

<h1>CSS) flex-wrap</h1>
flex item들이 한 줄에 정렬되는 방식을 제어합니다.(가로 축, 세로 축 모두)
