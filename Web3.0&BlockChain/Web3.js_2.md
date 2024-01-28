<h1>2024.01.08(월)</h1>

<ul>

<li>

**💻Web3.js 사용을 위한 개념 설명**<br>
<li>

**🟡비동기 프로그래밍 복습**


</ul>
<div style=border:solid;>
<h2>💻Web3.js 사용을 위한 설정</h2>

**이더리움 네트워크**는 **노드로 구성**되어 있고, **각 노드는 블록체인의 복사본을 가지고 있다**.<br>
만약, 내가 스마트 컨트랙트 함수를 실행하고자 한다면?<br>
* 스마트 컨트랙트의 주소
* 실행하고자 하는 함수
* 그 함수에 전달하고자 하는 변수

<br>
노드들 중 하나에 질의를 보내 위 3가지 정보를 전달해야한다.

**이때, 노드들은 JSON-RPC언어로만 소통이 가능!**

다행히도, web3.js는 편리하고 읽기 쉽게 javascript interface로 상호작용을 할 수 있다.<br>

---
<h3>1.npm설치</h3>

> <strong>NPM이란?</strong><br>
NPM(Node Package Manager)은 Node.js를 설치하면 자동으로 설치가 된다. **NPM은 명령어로 자바스크립트 라이브러리를 설치하고 관리할 수 있는 패키지 매니저**로, 전 세계 자바스크립트 개발자들이 **모두 자바스크립트 라이브러리를 공개된 저장소에 올려놓고 npm 명령어로 편하게 다운로드 가능**하다.<br>

**node.js**는 웹 브라우저에서 동작을 제어했던 javascript를 브라우저 밖에서도 사용할 수 있게 해줌.   

<strong>NPM 초기설정</strong><br>
**\$npm init**을 통해 여러 항목을 설정하는 단계를 거쳐 **package.json 파일로 생성**된다. 그러나, 일반적으로 터미널 상태에서 설정하기 보다 **package.json 파일에서 직접 변경하는 것이 직관적**이므로 **\$ npm init -y 명령어를 통하여 터미널 설정화면을 생략**하고 **package.json 생성**한다.

<h3>2.Web3 프로바이더(Provider) 설정</h3>

이제 우리의 프로젝트에 Web3.js를 넣었으니, 이를 초기화하고 블록체인과 대화를 하기위해서
우리가 처음 필요로 하는 것은 **Web3 프로바이더(Provider)**임.<br>

**Web3 프로바이더를 설정하는 것**
= **우리 코드에 읽기와 쓰기를 처리하려면 어떤 노드와 통신을 해야 하는지 설정하는 것**

=**전통적인 웹 앱에서 API 호출을 위해 원격 웹 서버의 URL을 설정하는 것과 같음.**

---
    
<h3>3.infura / metamask</h3>

Infura는 빠른 읽기를 위한 캐시 계층을 포함하는 다수의 이더리움 노드를 운영하는 서비스이다.
접근을 위한 API를 무료로 사용할 수 있음. **Infura를 프로바이더로 사용하면, 나만의 이더리움을 설치하고 계속 유지할 필요 없이 이더리움 블록체인과 메세지를 확실히 주고받을 수 있다.**

그러나, 사용자들은 블록체인을 단순히 읽기만 하는 것이 아니라, 블록체인에 쓰는 것도 원하기에, 그들의 개인 키로 트랜잭션에 서명을 할 수 있도록 해야한다.<br>
이를 대신 처리해주는 서비스가 이미 있다. 이중 가장 유명한 것이 **메타마스크(Metamask)** 이다.

**메타마스크**는 **사용자들이 이더리움 계정과 개인 키를 안전하게 관리할 수 있게 해주는** 크롬과 파이어폭스의 브라우저 확장 프로그램임.<br>
그리고 해당 계정들을 써서 **Web3.js를 사용하는 웹사이트들과 상호작용을 할 수 있도록** 해줌.
설치하면 **내 브라우저에서 Web3가 작동**하고, **이더리움 블록체인과 통신하는 어떤 웹사이트와도 상호작용**을 할 수 있다.

> (참고) 메타마스크는 내부적으로 **Infura의 서버를 Web3 프로바이더로 사용**하지만, **사용자에게 그들만의 Web3 프로바이더를 사용할 수 있는 옵션도 제공**한다.
</div>

<h2>🟡비동기 프로그래밍 복습</h2>

<h3>콜백(call back) 함수</h3>

콜 백 함수도 기본적으로 함수이다.<br>
그저, 다른 함수의 인자로 들어와서 다른 함수 내에서 호출되는 상황에서 **그때 그 인자로 받은 함수를 콜백함수라고 하는 것**이다.

<h3>Promise 객체</h3>

~~~javascript
//Producer
const promise = new Promise((resolve, reject)=>{
    //doing some heavy work
    console.log('doing something');
    setTimeout(()=>{
        resolve('success');
    }, 2000); //완료했다면?
    setTimeout(()=>{
        reject(new Error('problem'));
    }, 2000); //실패했다면?
});

//Consumer
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(()=>{ //무조건 수행
        console.log("finally");
    })
~~~

위 코드와 같이 promise를 생성할 수 있다.<br>
> **🔴주의!!**<br> promise 생성 시 바로 callback함수가 실행된다.<br> 만약, 어떤 이벤트에 대한 처리가 필요한 상황일 때는, 위와 같이 생성 시 불필요한 네트워크 통신이 일어날 수 있음.

<strong>then</strong><br>
Promise가 정상적으로 잘 수행이 되어서, resolve라는 Call back함수를 통해서 전달된 값이 then의 인자로 가는 것이다.<br>
**then에서는 값을 바로 전달해도 되고, 또 다른 Promise를 생성해서 반환해도 된다.

~~~javascript
//예시코드
const fetchNumber = new Promise((resolve, reject)=> {
    setTimeout(()=>resolve(1), 1000);
});

fetchNumber
    .then(num=>num*2)
    .then(num=>num*3)
    .then(num=>{
        return new Promise      ((resolve, reject)=> {
        setTimeout(()=>resolve(num-1),1000);
    });
})
.then(num=>console.log(num));
~~~

---
<h3>async & await</h3>
계속 .then.then.then... ❌<br>
<br>

~~~javascript
//1. async
async function fetchUser() {
    //do in 10 secs
    return 'ellie';
}
const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getApple() {
    await delay(3000);
    return '🔴';
}
async function getBanana() {
    await delay(3000);
    //delay끝날 때까지 기다려!
    return '🟡';
    //기다렸다가, 🟡를 리턴
}
//아래 코드 동일
function getBanana() {
    return delay(3000)
    .then(()=>'🟡');
}


~~~
* **async**<br>
async 키워드를 함수 앞에 쓰면, 함수 코드 블럭이 자동으로 Promise로 바뀐다.

* **await**<br>

---
<h2>앞으로 공부할 것들</h2>

* **promise와 async, await 직접 쓸 수 있을 때까지 익숙해지기**

* **web3.js 라이브러리 활용(잔고 확인)**