<h1>useState 동작 원리, map을 사용한 rendering</h1>

# useState
이전에, 리액트를 처음 접하면서 useState에 대해서 알게 되었다.
코드를 많이 작성하고, 접해보면서 많이 익숙해진 훅이다.
`useState`는 함수 컴포넌트 내에서 상태를 관리하고 갱신할 수 있도록 도와주는 역할을 한다.

~~~javascript
//import 생략
const [name, setName] = useState("")
setName("Kwon")
console.log(name) //name:"Kwon"
~~~
위처럼, setName함수를 사용해서 name의 값을 갱신할 수 있다.

나는 처음에 useState가 자바스크립트의 변수 선언 및 할당 방식과 같이 즉각적으로 값이 변경되는 것인줄 알았다. 그러나, 사실은 그렇지 않다.

~~~javascript
const onChangeWriter = (event) => {
    setWriter(event.target.value)
    if(writer&&title&&contents){
        setIsActive(true)
    }
}
~~~
위 코드는 작성자 Input에 입력값이 들어올 때마다 writer value를 업데이트 해주는 코드이다. 또한, if문을 통해 작성자,제목,내용 입력칸이 공백이 아니라면 IsActive 값을 true로 변경한다.

그런데, 저렇게 코드를 돌려보면 예상치 못한 문제가 발생한다.
작성자를 입력했는데도 불구하고(나머지는 모두 입력된 상태라고 가정 하에), 
IsActive는 true가 되지 않는다.

그 이유는, useState는 즉각적으로 값을 변경하지 않는 내부 로직을 가지고 있기 때문이다. useState는 값을 갱신한 뒤 Rerendering 진행한다.
~~~javascript
const [name, setName] = useState("")
const testFn = () => {
  setName("A")
  setName("B")
  setName("C")
  setName("D")
  setName("E")
}
testFn()
~~~
위와 같은 코드가 있다고 가정하자.
만약, useState가 즉각적으로 계속 값을 갱신해준다면 
testFn 함수를 실행했을 때,
1차. name:A => 리렌더링 
2차. name:B => 리렌더링
...
5차. name:E => 리렌더링

상당히 비효율적인 것을 알 수 있다.
따라서, useState는 함수가 끝났을 때를 기준으로 value를 갱신하고 1번만 리렌더링한다.

따라서,
~~~javascript
const onChangeWriter = (event) => {
    setWriter(event.target.value)
    if(writer&&title&&contents){
        setIsActive(true)
    }
}
~~~
위와 같이 작성하게 되면, 2글자 이상을 입력해야 IsActive가 true가 되는 것을 볼 수 있다. 따라서, 아래와 같이 수정해줘야 함.

~~~javascript
const onChangeWriter = (event) => {
    setWriter(event.target.value)
    if(event.target.value&&title&&contents){
        setIsActive(true)
    }
}
~~~

--- 
# Map

코드 가독성과 유지보수성을 높이는 코드는 Map을 사용하지 않을 수가 없는 것 같다.
항상 For문으로 배열을 순회할 때마다 지저분한 느낌을 많이 받았는데 Map을 배우고나서 마치 신세계가 열린 듯 했다.

`배열 요소 접근`
~~~javascript
const classmates = ["철수", "영희", "훈이"]
const a = classmates.map((el)=>(el+"어린이"))
console.log(a) //['철수어린이','영희어린이','훈이어린이']
~~~

`객체를 요소로 가지는 배열`
~~~javascript
classmates = [
	{ name : "철수" },
	{ name : "영희"},
	{ name : "훈이"}
]
const b = classmates.map((el)=>({name:el.name+"어린이"})
console.log(b)
/*
[
	{ name : "철수어린이" },
	{ name : "영희어린이"},
	{ name : "훈이어린이"}
]
*/
~~~

이처럼, map을 사용하면 중복된 작업을 하나의 작업만 잘 세팅해놓으면 한번에 완료할 수 있다.

jsx에도 아래와 같이 적용할 수 있다.
근데, 보통은 container,presenter 파일로 분리하기 때문에 변수로 전달해주는 것 보다는 직관적으로 작성해주는 것이 좋다.

~~~javascript
const classmates = ["철수", "영희", "훈이"] 
const aaa = classmates.map((el)=><div>{el}</div>)
return (
<div>
    {aaa}
//=classmates.map((el)=><div>{el}</div>
</div>
)
~~~
---
# gql, refetchQueries

## gql 세팅
~~~javascript
const DELETE_BOARD = gql`
  mutation deleteBoard($number : Int){
    deleteBoard(number: $number){
        message
    }
  }
`
~~~
gql 세팅할 때마다 헷갈렸던 부분이다.
변수를 인수로 받아올 때는 메서드 이름을 한번 더 작성하고 꼭 변수의 타입을 명시해주어야 한다.

## refetchQueries


refetchQuery는 기존에 받아왔던 **데이터가 변경 되었을 경우 최신 데이터로 다시 fetch 해주기 위해** 사용된다.

아래 예제는 사용 방법으로만 보면 좋을 것 같다.

~~~javascript
~~~javascript
const deleteBoard = async () => {
	try {
		const result = await deleteBoard({
			variables: {
				boardId: event.target.id,
			},
		});
	} catch (error) {
		console.log(error);
	}
};
~~~

위의 코드는 흔하게 볼 수 있는 삭제 Mutation이다.

위 코드는 삭제 Mutation이 실행 된 후에는 데이터가 변경 되었을 테지만 아직 최신 데이터가 반영 되지 않았다.

따라서 refetchQueries를 이용해 최신 데이터로 다시 받아오는 것이다.

~~~javascript
//refetchQueries를 이용해 최신 데이터 받아오기

const deleteBoard = async () => {
	try {
		const result = await deleteBoard({
			variables: {
				boardId: event.target.id,
			},
			refetchQueries: [
				{
                  //이전에 등록해놓은 게시물 조회 쿼리
					query: FETCH_BOARDS
				},
			]
		});
	} catch (error) {
		console.log(error);
	}
};
~~~

위의 코드를 자세히 살펴보면 useMutation 함수 안에서 refetchQueries라는 키가 있다는 것을 알 수 있다. refetchQueries는 Apollo에서 제공하는 기본 기능이다!

→ 기존의 fetch 부분에서 보내준 variables가 없다면 따로 적지 않아도 되지만, 만일 보내준 variables가 있다면 refetchQuerise부분을 아래와 같이 적어주어야 한다.
~~~javascript
refetchQueries: [{ query : FETCH_BOARDS,
                   variables : { 기존의 fetch때 보내준 것} }]
~~~

# React key의 중요성

## React에서 Key가 필요한 이유
![](https://velog.velcdn.com/images/dovelop/post/92ac4631-37cd-44db-9b7e-58b4b366713a/image.png)

해당 경고는 React가 어떤 요소를 변경, 추가, 삭제할지 식별하기 위함이다. 

key가 없는 경우에는 가상 DOM을 비교하는 과정에서 순차적으로 비교하며 변화를 감지한다. 

key가 있다면, 이 값을 사용하여 어떤 것이 수정이 됐는지 빠르게 감지할 수 있다.

React에서는 기존 데이터와 바뀐 데이터를 비교하여 바뀐 부분을 화면에 그려준다.

여기서 비교할 때 고유한 Key값이 없다면 모든 데이터를 비교해야 하지만, Key가 있으면 Key값만 비교하여 Key가 추가 됐는지, 삭제 됐는지만 비교하여 불필요한 비교나 렌더링을 없애준다.

그러기 위해 key는 안정적인 고유성을 부여하기 위해 **중복되는 값이 아닌 것**으로 지정해줘야 한다. **(만약 key를 지정하지 않을 경우 자동으로 index를 키로 사용합니다. 하지만 이는 좋은 방법이 아니라 경고가 뜬다.)**

그래서 React 공식 문서에서도 Key 값으로 id를 주는 것을 추천하고 있다. 

(아래는 예제이기 때문에 id가 없지만 예시로 넣어두었습니다.)

~~~javascript
import { Test } from '../../src/test2';

export default function Test2() {
	const List = ['사과', '딸기', '바나나'];

	return (
		<>
			{List.map((data) => (
				<Test key={id}>{data}</Test>
			))}
		</>
	);
}
~~~

---

# Fragment
어떤 태그를 넣을 지 모르겠다. -> `<> 태그 사용`
div태그는 다음줄로 넘어가는데 `<> 태그는 일렬로 나란히 붙게 됨.`

Fragment에는 **key를 주지 못함.** 따라서, key를 주고 싶다면 **<Fragment> 를 사용**한다.
이것은 react에서 제공해주는 것이고, import해서 사용해줘야함.
