**blank test 구현**

blank test는 **'통문장 암기'** 를 도와주는 사이트이다.<br>
본인이 암기하고 싶은 문장을 기반으로 사이트 내에서 자체적으로 빈칸 문제를 생성해준다.

---
<h2>🟢구현과정</h2>

<ul>

<li>

**1.문제 생성(make_answer)**
~~~javascript
function make_problem() {
    problem = string.split(' ');
    for (var i = 0; i < (problem.length) / 2; i++) {
        random[i] = parseInt(Math.random() * problem.length);
        for (var j = 0; j < i; j++) { //1글자 또는 중복 검사
            while (problem[random[i]].length <= 1 || random[i] === random[j]) {
                random[i] = parseInt(Math.random() * problem.length);
            }
        }
    }
    //빈칸 생성 과정
    for (var i = 0; i < answer.length; i++) {
        var tmp = string2;
        if (string2 === "") {
            tmp = string;
            string2 = tmp.replace(answer[i], "_______");
        }
        else {
            string2 = tmp.replace(answer[i], "_______");
        }
    }
    quiz.textContent = string2;
}
~~~
우선, 문장을 띄어쓰기를 기준으로 분리해서 problem 배열에 저장했습니다.
빈칸의 랜덤화를 위해 Math.random 메서드를 사용해서 번호를 추출하고,
problem 배열에서 빈칸을 뚫을 단어를 선택하도록 했습니다.
빈칸을 뚫을 단어를 선택해서 answer 배열에 순차적으로 저장했습니다.
빈칸 생성과정에서는 위에서 만든 answer 배열의 원소를 순회하면서 replace 메서드를 이용해서 빈칸으로 만들어주었습니다.

<strong>문제 해결</strong>
* **하나의 정답을 입력했을 때 마지막 빈칸 빼고 모두 작성되는 오류 발생**<br>
=> 빈칸 생성 과정에서 string2의 빈칸 생성이 누적되지않아서 발생함.
=> tmp변수를 둬서 갱신된 string2값을 계속 받아올 수 있도록 작성함. 

* **problem 배열의 원소의 길이(단어의 길이)가 한 글자 이하거나 중복되는 오류 발생**
=> 구현 중
---

<li>

**2.정답 시, 빈칸에 맞은 정답을 출력해주는 갱신 메서드(update) 작성**
~~~javascript
function update() {
    if(answer!=[]&&random!=[]){
        answer.shift();
        random.shift();
    }
    for (var i = 0; i < random.length; i++) {
        answer[i] = problem[random[i]];
    }
    var tmp = "";
    for (var j = 0; j < answer.length; j++) {
        if (tmp == "") {
            tmp = string;
            string2 = tmp.replace(answer[j], "_______");
        }
        else {
            string2 = string2.replace(answer[j], "_______");
        }
    }
    if(answer[0]==null) {
        quiz.textContent = string;
    }
    else{
        quiz.textContent = string2;
    }
}
~~~
pop()은 배열의 **뒤에서부터 원소를 제거**하고,
shift()는 배열의 **앞에서부터 원소를 제거**한다는 것을 알게 됨.

빈칸 생성 과정과 일치한다(맞춘 단어의 빈칸은 제외해주는 것 뿐)

answer가 비워졌다는 것은 마지막 단어를 맞췄다는 것이고, 그랬을 때는 더이상 string2가 갱신되지 않기 때문에 그냥 원문을 전체공개 해주었다.

---
<li> **check(), init()**

~~~javascript
function check() {
        if (input.value === answer[0]) {
            update();
            alert("정답");
            input.value = "";
        }
        else {
            alert("오답입니다.");
        }
    }
function init() {
    make_problem();
    input.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            check();
        }
    });
}
~~~ 

사용자가 입력한 값과 빈칸의 답이 같다면 문장을 갱신한다. <br>

<strong>문제해결</strong>

* 처음엔 count라는 변수를 둬서 Enter키 이벤트가 처리될 때마다 count값을 증가시켜서 사용자가 입력한 값을 answer[count]값과 비교를 했었다. 그런데, answer라는 배열은 정답을 맞출 때 마다 앞에 있던 원소(직전에 맞춘 단어)는 삭제되고, 다음 맞출 빈칸의 정답이 계속해서 첫 번째 원소가 된다. 여기에서 오류가 발생했고, 논리적으로 따져본 결과 answer배열의 0번째 인덱스 요소와 비교하는 것으로 작성하니 문제가 해결되었다.

--- 

<h2>수정할 부분</h2>

- 빈칸 중복제거, answer 순서대로 정렬 

<h1>Update</h1>

2024.01.14.

* 문제 생성을 위한 데이터를 읽어오기 위해 'data.json' 
파일을 만들고, **fetch 메서드**를 구현

~~~javascript
async function fetchData() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      const stringArray = data.strings;
      string = stringArray[Math.floor(Math.random() * stringArray.length)];
      make_problem();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
~~~
비동기 메서드를 사용하기 때문에 async, await키워드를 사용한다.
response에는 fetch로 반환된 data.json이 저장된다.
data에는 받아온 response가 json 형식이므로 자바스크립트 객체로 변환해서 저장한다. stringArray에서는 data 파일 안에 있는 객체인 strings을 저장해준다.

* 한 문장 내에 같은 키워드가 등장하는 경우가 생겨서 중복 오류 발생(따라서, 단어만 비교하는 것이 아니라, 단어 위치도 비교를 해야함)
=>**make_problem메서드** 수정
~~~javascript
function make_problem() {
    problem = string.split(' ');
    for (var i = 0; i < (problem.length) / 2; i++) {
        let newRandom;
        do {
            newRandom = parseInt(Math.random() * problem.length);
        } while (problem[newRandom].length <= 1 || random.includes(newRandom));
        random.push(newRandom);
    }
    show_answer();
     for (var i = 0; i < answer.length; i++) {
        wordPoitions[answer[i]] = random[i];
    }

    string2 = string.split(' ').map(function(word) {
        return wordPositions[word]s !== undefined ? "_______" : word;
    }).join(' ');

    quiz.textContent = string2;
}
~~~
**Random 추출**<br>
**random.includes(newRandom)**<br>
=> includes 메서드를 활용해서, **기존에 추출된 random 배열에 새로 추출한 newRandom이 존재하는지 확인을 하고, 존재한다면 다시 newRandom을 추출**하게 됨. **push 메서드를 이용해서 random배열의 원소로 newRandom을 추가**한다.

---

***빈칸 정답 확인 및 정답을 반영한 빈칸 문장 업데이트 메서드 구현** 

~~~javascript
function check_update() {
    if (answer.length > 0 && random.length > 0) {
        const correctAnswer = answer[0];
        const correctPosition = random[0];
    
        // 입력한 정답이 맞으면 해당 정답을 wordPositions에서 삭제
        if (input.value === correctAnswer) {
          delete wordPositions[correctAnswer];
          string2 = string;
          // 새로운 빈칸 문제 업데이트
          for (const word in wordPositions) {
            string2 = string2.replace(word, "_______");
          }
          
          quiz.textContent = string2;
          alert("정답");
          input.value = "";
          answer.shift();
          random.shift();
        } else {
          alert("오답입니다.");
          input.value = "";
        }

      }
    
      if (answer.length === 0) {
        quiz.textContent = string;
        alert("잘하셨습니다😊 다음 문장으로 넘어갈게요");
        location.reload();
      }
    }
~~~

**delete메서드**를 사용해서 객체에서 입력한 답과 일치하는 key를 삭제해줬다.
그런 다음 정답을 맞춘 빈칸은 제외되고 재구성된 wordPositions로 빈칸을 보여준다.

---

* **버튼 클릭 시, 다음 문제로 넘어감**
~~~javascript
btn.addEventListener('click', ()=>{
    location.reload();
});
~~~

**loaction.reload() 메서드는 페이지 새로고침(F5)과 같은 기능을 한다.**