<h1>2024.01.05(금)</h1>

<ul>

<li>

**연구실 세미나 발표**<br>
<li>

**프로세스와 스레드**
<li>

**동기 프로그래밍/비동기 프로그래밍**<br>
<li>

**1급 객체 & Call Back 메서드**
</ol>


<h2>세미나 발표 참석 후기📚</h2>
오늘 연구실 첫 세미나에 참석하고 그동안의 공부한 것들을 발표하는 시간을 가지고 왔다. 사실, 선배님들에 비해서 내가 공부한 것들이 너무나도 수준이 낮아서 내심 걱정이 많이 됐었다. 그래도 예상과 다르게 한 선배님께서 벌써 혼자서 간단한 페이지를 만들어본 것에 대해서 엄청 빠르게 배운다고 칭찬도 해주셔서 내가 잘하고 있구나 라는 자신감을 가질 수 있었다.<br>
선배님들의 발표를 들으면서, 아직 내가 배울 것들이 너무나도 많고
내가 공부한 것들을 다른 사람에게 발표하는 능력이 참 중요한 것 같다라는 세미나 내내 생각을 했다.<br>
이번 세미나 참여를 통해서 내가 앞으로 어떤 방향으로 공부를 해나가야 할 지, 어떻게 발표 능력을 향상시킬 수 있을지를 많이 생각해보게 되었고 훗날 나에게 큰 성장이 되어줄 것이라 확신이 들었다. 원래 내 공부 계획은 CSS를 조금 더 공부하고, 리액트를 바로 공부하려고 했는데 교수님께서 비동기 프로그래밍에 대해서 공부를 하고 리액트를 공부하는 것이 좋다고 말씀하셔서 비동기 프로그래밍에 대해서 먼저 학습 후 리액트를 공부할 예정이다.<br>
한 주 한 주 열심히 해서 학부생 그 이상의 모습을 보여드리고 싶다. 


<h2>프로세스(process)와 스레드(thread)💻</h2>

 우리가 프로그래밍을 하면서 일반적으로 각 함수와 코드들이
 **위에서 아래로 차례로 동작하는 방식**을 <span style="color:powderblue"> **동기 프로그래밍**</span>이라고 한다.<br>

🟢<strong>프로세스(process)와 스레드(thread)?</strong><br>
프로그램을 실행시켰을 때, 그 프로그램이 돌아가고 있는 상태<br> 즉, 컴퓨터가 어떤 일을 하고 있는 상태를 **프로세스(process)** 라고 한다.<br>
여러 프로세스를 함께 돌리는 작업은 **동시적,병렬적 혹은 혼합적**으로 이루어진다.<br>    

☝️동시성은 <span style="color:red">프로세서 하나</span>가 프로세스들을 번갈아가면서 조금씩 조금씩 진행해서 마치 동시에 작업하는 것처럼 보이는 것. 여기서, 진행 중인 작업을 바꾸는 것을 Context Switching 이라고 함.<br>
✌️병렬성은 <span style="color:red">프로세서 하나에 코어 여러 개</span>가 달려서 각각 동시에 작업들을 수행하는 것(듀얼 코어, 쿼드코어, 옥타코어같이 코어가 달린 프로세서에서 가능한 방식)

한 프로세스 내에서도 여러 갈래의 작업들이 
동시에 진행될 필요가 있다.

이 갈래를 **'스레드'** 라고 부른다.<br>
비유해서 설명하자면, 햄버거를 만드는 프로세스에서는
<strong>패티를 굽는 스레드</strong>가 진행되는 동안
<strong>빵에 야채를 얹고 소스를 뿌리는
스레드</strong> 도 진행될 수 있는 것이다.

<h2>비동기 프로그래밍🚇</h2>

 우리가 프로그래밍을 하면서 일반적으로 각 함수와 코드들이
 **위에서 아래로 차례로 동작하는 방식**을 <span style="color:powderblue; font-weight:bold">동기 프로그래밍</span>이라고 한다.<br>

 하나의 철로에 여러 기차가 동시에 다니고 있다고 가정했을 때 앞에 가고 있는 기차가 고장으로 인해 멈춰있다면 뒤에 따라오는 기차들의 운행에도 문제가 생길 것이다. <br>

 이러한 상황은 **동기 상황**이라고 볼 수 있다. **고장난 기차가 정상적으로 돌아올 때 까지 기다려야**하고, 다른 기차는 그동안 **운행할 수 없게** 된다. <br>

 그렇다면, **비동기적인 상황**이라면 어떨까?<br>
 우선 하나의 철로 외에 다른 철로가 또 존재한다.<br>
 따라서, 앞에 가던 기차에 문제가 발생했다면 임시로 다른 철로로 옮긴다. 그러고나서 나머지 기차들은 정상적으로 운행을 하고, 고장났던 기차가 정상적으로 복구됐다 라는 메시지를 받으면 다시 원래 철로로 옮긴다.

 비동기적일 때 **훨씬 효율적**이고, **많은 일을 할 수 있다**는 것을 알 수 있다.

 내가 1차적으로 이해한 동기 프로그래밍과 비동기 프로그래밍의 의미론적 차이는 위와 같은 것 같다. 

<h2>1급 객체 & Call Back 메서드📞</h2>
<br>
<span style="color:powderblue; font-weight:bold">1급 객체(시민), first class citizen</span>란 무엇일까?

**변수에 할당할 수 있는가?** 를 기준으로 **1급 객체**/ **2급 객체**로 구분한다.

추가로, 함수(function)가 **다른 함수의 return값**으로 사용이 가능하거나, **다른 함수의 인자**로 사용이 가능하다면 그 언어는 함수를 **1급 객체로 대우**해주는 것.

<h3>🟡Call Back 함수란?</h3>

~~~javascript
val = function(🔴){
    return 🟢
}
function fn(arg) {
    arg();
}
fn(val)
~~~
val이란 함수는 바로 실행되진 않지만, **다른 함수(fn)의 인자로 입력이 되어서, fn에 의해서 나중에 호출(call back)** 된다.<br>

val이라는 함수는 **기본적으로** call back함수가 아니다.<br>
그러나, <span style="background-color:powderblue;color:deeppink">**val이라는 함수가 다른 함수의 인자로 사용되어서 그것이 호출이 된다라면**</span> 이 맥락에서  <span style="background-color:powderblue;color:deeppink">**val는 call back 함수가 되는 것**</span>이다.<br>
<span style="color:skyblue">인자로 전달된 함수를 호출하는 것이 일반적인 콜백의 형식이다.</span><br><br>
번외로, 외국 커뮤니티에서는 **callback**보다는 **'call at the back'**으로 생각하면 훨씬 이해가 빠를 것이라고 말을 하고 있다.<br>
즉, **함수를 호출한 다음 그 뒤에서 호출되어 할 일을 지시하는 함수**라는 이야기이다.

~~~javascript
words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
function callback(element){
    console.log(element);
    return element.length > 6;
    /*아래코드와 동일
    if(element.length > 6) {
        return true;
    }
    else {
        return false;
    }
    */
}
newWords = words.filter(callback);
/*익명 함수 이용
newWords = words.filter(function(element){
    return element.length > 6;
});
*/
/*화살표 함수 이용

newWords = words.filter((element)=>{
    return element.length > 6;
});
*/
console.log(newWords);
~~~

> <strong>화살표 함수(arrow function)</strong><br>
~~~javascript
//최초
var a = function(element) {
    return element.length > 6;
} 
//화살표 함수
var a = (element) => {
    return element.length > 6;
}
//인자가 하나인 경우 인자 괄호도 필요X
var a = element => {
    return element.length > 6;
}
//코드가 한 줄인 경우 중괄호와 return도 생략 가능
var a = element => element.length > 6;
~~~

<h2>공부 계획🔥</h2>

**비동기 프로그래밍**<br>
-promise(then, catch)<br>
-async & await<br>
-new promise<br>

**CSS**<br>
-css 그리드<br>
-미디어 쿼리<br>
-css코드의 재사용<br>