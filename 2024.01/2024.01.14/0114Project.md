<h1>2024.01.14</h1>
**blank test 프로젝트 업데이트**
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