<h1>컴포넌트 디자인 패턴과 리액트의 단방향 흐름</h1>

### 폴더구조 체계화

프로젝트를 만들때 폴더 구조는 굉장히 중요하다.

실무에서 사용하는 폴더 구조는 여러가지 방법이 존재하는데, 이러한 방법들을 **패턴**이라고 부른다.

**리액트**에서 사용하는 유명한 패턴으로는 **container / presentational 패턴과 atomic** 패턴이 있다.

#### Container / presentational 패턴

React에서 javascript 영역과 JSX(UI) 영역을 구분해서 코드를 작성해왔다.
그런데, 아무래도 JS 코드와 JSX 코드를 합치다보니 코드가 상당히 길어지는 것을 느꼈다. 이렇게 되면 **`유지보수가 힘들어지고 가독성도 상당히 떨어지게 된다.`** 따라서, JS부분을 Container, 그리고 JSX 코드를 Presentational 파일로 나누어서 사용한다.

![](https://velog.velcdn.com/images/dovelop/post/a9676c0e-30dc-47ad-b804-23c21455cef5/image.png)

[boardId]가 상세페이지이다. 
기존에는 [boardId]에 있는 index.js 파일에 JS, JSX, Query 코드가 모두 담겨져있었다.

![](https://velog.velcdn.com/images/dovelop/post/e962c36d-8d2b-47b9-98a5-8cfc4479f968/image.png)

리액트는 컴포넌트를 조립하는 것!!
위 그림처럼, 4개의 컴포넌트로 나누었다.(Container, Presenter, Queries, Styles)

물론, 최종적으로 페이지를 열 때는 하나의 파일(index.js)만 실행된다.
따라서, 조립을 잘 해준 뒤에 index.js에 완성품만 보내주면 된다.

조립하는 방법은 아래와 같음.
![](https://velog.velcdn.com/images/dovelop/post/3e5ee2d2-51f6-498c-a855-365bed4cc75f/image.png)

Container는 JS 컴포넌트라고 했다. 따라서, graphql을 활용하기 때문에 gql 세팅 컴포넌트를 import 해야한다.

![](https://velog.velcdn.com/images/dovelop/post/191d100d-9af2-4337-bff6-d09643e8633e/image.png)

Presenter는 JSX 컴포넌트이다. 따라서, style 속성이 담긴 컴포넌트를 import해줘야 한다.

![](https://velog.velcdn.com/images/dovelop/post/cb1092ff-59d2-45b7-abde-8a9db1496701/image.png)

그리고, 최종 조립품을 만들기 위해서
Container 컴포넌트 BoardDetailUI를 import해서 return 컴포넌트 요소로 삽입해준다.

저기서 writer={data?.fetchBoard?.writer}는 props 객체에 전달될 내용이다.

JSX에는 html코드도 있지만 분명 JS코드에서 작성한 변수 혹은 함수를 사용해야하는 부분도 있다. 
그러나, 지금은 JS컴포넌트와 JSX컴포넌트를 분리시켰기 때문에 변수/함수를 사용하지 못한다.
따라서, JS컴포넌트에서 JSX컴포넌트에게 "보내줄테니까 가져가서 사용해"라고 말하는 것이다.

만약 위 코드처럼 전달하면 props 객체의 형태는 아래와 같다.
~~~javascript
props = {
  writer : data?.fetchBoard?.writer
  createdAt : data?.fetchBoard?.createdAt
  ...
}
~~~

그러면 JSX 컴포넌트는 props를 인수로 받고, props 객체 접근을 통해 JS컴포넌트에서 전달해준 데이터를 사용할 수 있게 되는 것이다.

여기서 JS 컴포넌트는 부모 컴포넌트, JSX 컴포넌트는 자식 컴포넌트가 되는 것이고, 리액트는 **데이터 흐름이 단방향 구조**이다.

데이터 흐름이 단방향 구조라는 것은 **props는 부모가 자식에게만 줄 수 있으며**, **자식이 부모에게 줄 수 없다는 것**을 의미한다.
즉, JSX컴포넌트가 JS컴포넌트에게 props 전달은 불가능하다는 것이다.

리액트의 데이터 흐름이 단방향 구조이기때문에 우리가 에러를 캐치하기가 더 쉽고, 보기에 더 깔끔하다. (양방향 구조는 Angular 등이 있다.)

### export vs export default

코딩하다보면, **import 해올 때 중괄호 를 사용해서 데리고 오는 것**이 있는가 하면, **중괄호 없이 데리고 오는 것** 이 있다.

**중괄호의 사용 여부는 export를 하냐 export default를 하느냐에 따라 결정**된다.

**export**를 사용하게 되면 **한 컴포넌트 내에서 여러개를 내보내기 때문에 중괄호를 사용해 필요한 것들만 import**한다.

하지만 **export default**를 사용하게 되면 **한 컴포넌트에서 한개만 내보내기 때문에 중괄호를 사용하지 않고 import** 하게 된다.

> **💡 export vs export default**
> 
> - **`export`**
>     - **중괄호를 사용해서 import** 함.
>     - **한 컴포넌트 내에서 여러개를 내보낼 때 사용**함.
>     - import 해올 때는 **export한 이름 그대로 불러와야** 함.
>     - 한번에 묶어서 import 할 시에는 **`import * as 아무이름 from ‘경로’`** 를 이용함.
> - **`export default`**
>     - **중괄호 없이 import** 함
>     - import 해올 때 **export 한 이름이 아니어도 괜찮다.
>         - 한 컴포넌트에서 한개만 export했기 때문에 파일의 경로만 제대로 지정되면 이름이 어떤것이든 상관없이 잘 불러온다.

<h2>atomic 패턴</h2>

**atomic 패턴** 이란, 소스코드를 **아주 작은 컴포넌트 단위**로 먼저 쪼개는 방법을 의미한다.

이렇게 하는 이유는 **컴포넌트의 중복을 최소화하기 위함**이다.

총 5개의 폴더 구조로 이루어지며, 각각의 의미는 화학의 원리를 이용하여 만든다.

atoms, molecules, organisms, templates, pages 이렇게 5개의 폴더로 나누어서 컴포넌트들을 관리하게 된다.

atomic 패턴은 디자이너분들의 세계에서도 널리 알려진 패턴이다.

따라서, atomic 패턴을 사용하면 디자이너분들과 협업에 유리해질 수 있고, 프로젝트 시작부터 체계적인 UI적 설계가 가능해진다.

하지만, 프로젝트 시작부터 UI를 디자이너분과 함께 전체적으로 설계해야하므로 실제 개발준비까지 걸리는 시간이 오래 걸릴 수 있다는 단점이 있다.

따라서, 시간, 비용, 팀의 상황 등에 따라서 적용하는 것이 일반적이다.

---

## 마치며

확실히 컴포넌트 디자인 패턴을 학습하고 나서, 프로젝트 파일이 깔끔하고 가독성 좋게 정리되었다 라는 생각이 들었다.
또한, 강의에서 **"남이 짠 코드가 잘 읽힌다면, 그것은 읽는 사람이 고수인 것이 아니라 코드를 작성한 사람이 고수일 확률이 높다"** 라는 말이 인상 깊었다.
아무리 프로그램이 잘 동작하더라도 나만 알아볼 수 있는 코드를 작성하는 것은 좋은 코드가 아니라는 것을 배웠다.