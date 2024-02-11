<h1>Routing 개념✅</h1>

`Routing` 이란?<br>

**사전적 의미**<br>어떤 네트워크 안에서 통신 데이터를 보낼 때 최적의 경로를 선택하는 과정

간단하게 말하자면, **페이지를 이동하는 것**이다.

이러한 `Routing`을 위해서는 **`Router`** 라는 객체가 필요하다.

**router 객체**는 페이지 이동과 관련된 기능을 가지고 있다.(push, query, replace ...)

router는 `next.js`에서 제공하는 라이브러리이고,

이 객체를 사용해서 A 페이지에서 B 페이지로 이동할 때, `"B 페이지로 라우팅한다"`고 말한다.

### 자주 사용하는 라우터(router) 객체 기능

- `pathname` 현재 위치 주소
- `asPath` 현재 위치 주소
- `back` 뒤로가기
- `push` 현재 페이지에서, 다른 페이지로 이동
- `reload` 새로고침
- `replace` 현재 페이지 삭제 후, 다른 페이지로 이동

---

<h1>정적라우팅과 동적라우팅✅</h1>

**`정적라우팅`**

```javascript
import { useRouter } from "next/router";
export default function StaticRoutingPage() {
  const router = useRouter();
  const onClickMove = () => {
    router.push("/section05/05-01-static-routing-moved");
  };
  return <button onClick={onClickMove}>페이지 이동하기!!!</button>;
}
```

위 코드처럼, router.push("이동할(연결할) 페이지주소")를 작성하면 **05-01-static-routing-moved** 폴더 안에 있는 index.js을 불러와서 페이지를 이동하게 된다.<br>
다시말해, 다른 페이지로 routering하려면 직접 주소를 변경해줘야한다. **만약, 페이지가 1억개라면? 1억개의 폴더를 만들어야한다.**

---

**`동적라우팅`**

```javascript
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage1() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.qqq) },
  });

  console.log(data);
  return (
    <div>
      <div>{router.query.qqq}번 페이지 이동이 완료되었습니다.</div>
      <div>작성자는 {data?.fetchBoard?.writer}입니다.</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </div>
  );
}
```

FETCH_BOARD는 fetchBoard API 메서드 호출 정보를 담고 있고, 호출 전에 number를 받아와서 해당 number에 해당하는 게시물의 정보를 가져온다.

이전에 사용했던, useMutation이나 useState는 모두 대괄호를 사용했는데 useQuery는 중괄호를 사용해줘야한다.(나중에 더 자세히 알아보도록 함)

대괄호로 감싸준 폴더(EX:**[qqq]**)를 만들어주면 이동해주고자 하는 **페이지 번호, 혹은 게시글 번호가 대괄호 안에 쓰여진 변수명에 담겨져 그 변수 안에 있는 데이터를 꺼내 조회할 수 있다.** (이 때, 대괄호 안에 쓰여지는 폴더 이름은 단순히 변수명이기 때문에 어떻게 작성해주셔도 상관없음) 이러한 과정을 **router 객체가 도와주는 것**이다.

실제로 **`router.query = { boardId: 1 }`** 이런 형식으로 들어가게 되면서 자동으로 게시글 번호를 꺼내올 수 있다.

<a href="https://github.com/Kwon2do/CodeCamp-Front-end-/tree/main/class/pages/section05">전체 코드는 이곳에서 확인</a>

---

<h1>비동기 통신과 조건부렌더링✅</h1>

javascript는 **`작성된 코드가 상단에서부터 순서대로 실행`** 되기 때문에 데이터를 요청하고 응답을 받아오는 동안 화면에 그려질 데이터의 내용이 **undefined** 이므로 **`첫 화면이 그려지는 시기에 데이터를 불러오면서 에러가 발생`** 하게 된다.

이 부분이 효율적으로 실행되기 위해서 화면을 미리 그려놓고 데이터를 그려주기 위해서 **`조건부렌더링`** 을 사용한다.

* 방법1) 삼항 연산자<br>
```javascript
data ? data.fetchProfile : undefined
```

* 방법2) && 연산자
```javascript
//데이터가 없을 경우 자동으로 undefined를 반환
data && data.fetchProfile
```

반대로 앞의 값이 거짓일때 뒤의 값을 보여주는 경우도 있다 **`Nullish coalescing`** 연산자라 불림.

**`??연산자`** 는 앞의 값이 빈 값이면 뒤의 값을 보여주며 **`||연산자`** 는 **앞의 값이 거짓(false)일 경우 뒤의 값을 보여준다.**

```javascript
data ?? data.fetchProfile

data || data.fetchProfile
```

### ⭐옵셔널 체이닝 (Optional-Chaining)
**"데이터 없을 수도 있는데, 없으면 undefined 리턴해주고, 있으면 오른쪽값 반환해줘"**

`optional-chaing`이란 기**존의 && 연산자를 쓰면서 길어졌던 코드를 더욱 간결하게 사용하는 연산자** 이다.

~~~javascript
data?.fetchProfile
~~~

**optional-Chaining**은 **?** 연산자 앞 객체의 참조가 ***undefined || null*** 이라면 ***undefined***를 리턴해준다.

위에 있는 삼항연산자, && 연산자와 똑같은 기능을 하는 것이다.

---

## 문자열안에 변수 입력 방법

~~~javascript
router.push("/section05/05-05-dynamic-routing-board-mutation-moved/"+result.data.createBoard.number)
//백틱(``)으로 감싸면 ${}를 사용해서 변수를 포함시킬 수 있다. (가독성 향상)
router.push(`/section05/05-05-dynamic-routing-board-mutation-moved${result.data.createBoard.number}`)
~~~

## graphql 데이터 통신 및 Routing

### _app.js 파일
react에서는 해당 _app.js 파일을 불러와서 페이지를 구성한다.
하지만, 항상 다른 js파일에 페이지를 구성 할 코드를 작성하는데 어떻게 불러와지는 건지 궁금했다.
_app.js파일의 return 영역에 가면 해답을 찾을 수 있다.
~~~javascript
  return (
      <Component {...pageProps} />
  )
~~~
이 Component 부분에 우리가 읽어올 js파일(페이지 내용)이 삽입되는 것이다.
한마디로, `<Component {...pageProps} />` 위에 작성하는 것들은 모든 페이지의 공통 부분이 되는 것이다.
~~~javascript
  return (
      <div>공통부분시작<div>
      <Component {...pageProps} />
	  <div>공통부분끝<div>
  )
~~~

### graphql 데이터통신

graphql를 활용한 데이터 통신을 공부하면서 ApolloClient 셋팅, Hook 사용 등이 익숙하지 않아서 헷갈렸다.

#### _app.js에서 ApolloClient Setting
~~~javascript
  const client = new ApolloClient({
    uri: "API주소",
    cache: new InMemoryCache()
  })
  
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
~~~

#### graphql Setting
~~~javascript
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`
~~~

백엔드 개발자가 만들어놓은 createBoard API 메서드를 호출하기 위해 위와 같은 graphql setting이 필요하다.<br>
`mutation createBoard($createBoardInput: CreateBoardInput!)`
인수로 어떤 데이터를 전달받을 것인지에 대한 설명이 적혀있고,  `createBoard(createBoardInput: $createBoardInput) {
	_id }`
생성한 게시물의 id를 받아온다(return)

### 동적 라우팅(dynamic routing)

![](https://velog.velcdn.com/images/dovelop/post/52d5d718-65ea-469b-be6d-f2ac00b1ccec/image.png)

동적 라우팅이라는 개념은 그냥 단순하게 말해서
**하나의 템플릿으로 여러 데이터를 효율적으로 표시하는 것**이다.
미리 정해둔 양식에 받아온 데이터를 채워넣는 식이다.
~~~javascript
router.push(`/boards/${result.data.createBoard._id}`);
~~~
위와 같이 작성해서, 페이지를 이동한다.
사진에서 보이는 [boadrId] 폴더는 일반 폴더가 아니라 변수다.
정확히 말하면 경로가 변수다.
우리는 boards폴더 안에 [boardId]라는 변수 폴더를 생성해놨다.

만약 위 코드처럼 작성하면 변수 폴더 [boardId]는 result.data.createBoard._id 값을 반영하게 되는 것.

http://localhost:3000/boards/boardId 와 같은 식의 주소로 연결되는 것이다.

그렇다면, 이동된 페이지에서는 무엇을 처리할 수 있을까?
등록한 게시물의 id를 기억하고 있다(boardId)
따라서, 게시물 id를 이용해서 제목,내용,작성자 등의 데이터를 요청하여 받아올 수 있다.

~~~javascript
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
~~~

위 코드를 살펴보면, FETCH_BOARD gql 셋팅 안에 fetchBoard 메서드를 정의하고, 인수로 boardId를 전달 받아야한다.

`router.query.boardId`
현재 주소에서 boardId를 떼서 받아오는 것.

참고로, useMutation , useState 등은 대괄호로 표현을 했는데
useQuery는 중괄호이고, 매개변수는 반드시 data이다. (요청한 데이터가 저장됨)

---
