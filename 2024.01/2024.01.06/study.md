<h1>2024.01.06(토)</h1>

<ul>

<li>

**Call Back & Promise**<br>
<li>

**Promise 사용과 생성법**
<li>

**async&await**<br>

</ul>



<h2>Call Back & Promise💻</h2>

🟢<strong>Promise란?</strong><br>
개발자들마다 비동기 함수들이 제각각으로 구현하게 되는 문제가 발생함. **Promise**를 **'비동기 작업 처리 표준 인터페이스'** 라고 생각하고, 이거만 쓰기로 약속함.<br>
**비동기작업을 하는 함수의 리턴 타입**으로 쓰이는 게 바로 <span style="color:skyblue; font-weight:bold">promise</span>다.

~~~javascript
<script>
    console.log(1);
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
    });
    console.log(2);
</script>
~~~
 🔥fetch 함수는 해당 URL에서 데이터를 가져오기 위한 요청을 시작, 이 함수는 Promise를 반환하며, 이 Promise는 네트워크 요청이 완료되면 response 객체로 resolved된다.<br><br>
 🔥.then(function(response) {...})은 첫 번째 핸들러로, 네트워크 요청이 성공적으로 완료되면 호출됩니다. response 매개변수는 서버로부터의 응답을 나타내는 Response 객체입니다.<br><br>
 🔥 .then(function(myJson) {...})은 두 번째 핸들러로, 앞서 얻은 Response 객체에서 JSON 데이터를 추출합니다. response.json()은 또 다른 Promise를 반환하며, 이 Promise는 JSON 데이터가 성공적으로 파싱되면 해당 JSON 데이터로 resolve됩니다. 그리고 이 데이터는 자바스크립트 데이터 타입으로 변환되고,myJson 매개변수로 전달되어 콘솔에 출력됩니다.<br><br>

 결론적으로, 주어진 URL에서 데이터를 비동기적으로 가져와서 그 데이터를 콘솔에 출력하는 기본적인 구조를 가지고 있는 것이다.
 > <strong>부가설명</strong><br>
json(): resource에 있는 코드가 json타입 데이터라는 것을 자바스크립트에게 알려준 것<br>
=>우리에게 자바스크립트 데이터 타입으로 바꾸어줌<br>
response.json() 값은 promise가 나온다.
즉, <span style="color:skyblue; font-weight:bold">promise가 하는 일은 json텍스트를 자바스크립트의 데이터타입으로 converting을 하는 promise고
그 promise는 converting 작업이 끝났을 때, then을 호출할 것</span>이다.
response.json() = promise이기 때문에, then과 catch를 쓸 수 있다.
즉, 
~~~javascript
//콜백함수가 들어간다.//결과값을 첫번째 파라미터로 넣는다
response.json().then(function(data){ 
	console.log('data', data); 
});
~~~

<h2>Promise 객체는 두 개의 메서드를 가진다</h2>

**then과 catch 메서드**이다.
둘 다 <span style="color:skyblue; font-weight:bold">callback함수를 인자로 받는다</span><br>
**then** : fetch를 통해서 실행한 결과가 성공했을 때, then으로 전달된 호출함수가 호출되도록 함.
만약 그 호출함수에서 return값이 있다면 그것을 인자로 받아올 수 있다.
**catch** : 실패했을 때, catch를 통해서 에러 데이터를 전달할 수도 있다.

<h2>Pending, Resolved, Rejected</h2>

**pending상태?** 진행중 / 대기중이란 뜻<br>
promise를 사용하게 되면, 그 즉시 pending 상태가 된다.<br>
그리고, 그 결과가 성공했을 때 then으로 전달된 함수가 호출이 된다. <br>=> **resolved상태** <br>
만약 error가 발생하면 catch로 전달된 함수가 호출이 된다.<br> => **rejected 상태**

<h2>Promise 생성자 함수의 구조</h2>

~~~javascript
new Promise(function(resolve, reject) {
  // 비동기 작업 수행
  // 성공 시 resolve 호출
  // 실패 시 reject 호출
});
~~~

<h2>asynz & await</h2>
비동기적 코드를 동기적으로 보이게 만들어준다.<br>
코드로 확인하는 것이 가장 이해하기 쉽겠지만, 이론은 아래와 같다.<br>

비동기 함수 앞에 **await**이 붙는다면, 이 함수가 실행되기를 기다리라는 뜻이다.
await가 앞에 붙어있는 promise를 반환하는 함수는 반드시 다른 함수 안에서 실행되어야하고, 그 다른 함수 앞에는 **async**를 붙여줘야 함.

**async**라고 하는 것은 **평범한 함수를 promise를 리턴하는 비동기적인 함수로 만들어주는 키워드**이다.
그렇기 때문에 **async 함수에서 await 키워드를 사용할 수 있는 것**이다. 

---
<h2>Code Remind</h2>

1.**promise(nested,chaining)**

~~~javascript
<script>
    //성공,실패 여부를 알려주는 콜백함수를 꼭 넣어줘야함.
    var job1 = new Promise(function(resolve, reject){
        //성공을 알림. 'resolved'는 처리한 결과를 설명
        resolve('resolved ok'); 
    });
    //then은 처리된 결과 data를 받는 인자가 필요
    job1.then(function(data){
            console.log('data', data);
    })


   //------------------------------------------------------------------

    var job1 = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('resolved ok'); 
        },2000);

    });
    //then은 처리된 결과 data를 받는 인자가 필요
    job1.then(function(data){
            console.log('data', data);
    })


   //------------------------------------------------------------------

   function job1() { 
   return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject('문제가 발생했습니다.'); 
        },2000);
    });
}
   function job2() { 
   return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('job2 ok'); 
        },2000);
    });
}
//Nested Promise 방식
    job1().then(function(data){
            console.log('data', data);
            job2().then(function(data) {
                    console.log('data', data);
            })
    })

//chaining 방식(선호)
job1()
.then(function(data){
    console.log('data1', data);
    return job2(); //job2().then(function(data)말고 아예 job2를 리턴해버리는 것
})
.catch(function(reason){
    console.log(reason);
    return Promise.reject('이유설명'); //에러가 뜨면서 뒤 코드 더이상 실행X
})
.then(function(data){
    console.log('data2', data);
});
~~~

2.**async&await**

~~~javascript
<script>
    //Promise 이용
    function timer(time) {
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve(time);
            }, time);
        });
    }
    timer(1000).then(function(time){
        console.log('time:'+time);
        return timer(time+1000);
    }).then(function(time){
        console.log('time:'+time);
        return timer(time+1000);
    }).then(function(time){
        console.log('time:'+time);
    })
    */
   //---------------------------------------------------------------------
   //async&await 이용
   function timer(time) {
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve(time);
            }, time);
        });
    }
   async function run() { //async를 붙이면 암시적으로 Promise를 리턴한다.
   console.log("start");
   var time = await timer(1000); 
   //비동기적 코드임을 알려주기 위해 await 사용
   //then안의 콜백의 첫 번째 파라미터를 이렇게 받아올 수 있다(혁신..)
   console.log('time:'+time);
   time = await timer(time+1000);
   console.log('time:'+time);
   time = await timer(time+1000);
   console.log('time:'+time);
   console.log('end');
   }
   /*출력결과 예상
   console.log('parent start');
   run();
   console.log('parent end');
   + console.log(run()); -> Promise가 출력 //promise니까 await을 또 붙일 수 있는 것
   */
  async function run2() {
    console.log('parent start');
    await run();
    console.log('parent end');
  }
  //async로 안묶고 순서 지정
  console.log('parent parent start');
  run2().then(function(){
    console.log('parent parent end');
  });
</script>
~~~
<h2>공부 계획🔥</h2>
비동기 프로그래밍에 대해서 학습해보았는데, 헷갈리는 부분도 많고 어떻게 잘 활용할 수 있을지에 대한 감이 부족하다.<BR><br>
다음 공부 때는, <strong style="background-color:powderblue;color:black">CallBack함수,Promise,async&await 활용 예제들을 많이 접하면서 이해하는 시간</strong>을 가져야할 것 같고, <strong style="background-color:powderblue;color:black">CSS 강의 마무리</strong>와
 <strong style="background-color:powderblue;color:black">이더리움 웹3.0 자바스크립트 라이브러리</strong>에 대해서도 학습해봐야겠다.