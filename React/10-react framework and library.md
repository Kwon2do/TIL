# 프레임워크와 라이브러리

개발 공부를 하면서 프레임워크와 라이브러리 용어에 대해서 상당히 많이 접한 경험이 있다.
그럴 때 마다, 항상 이 둘의 명확한 차이점을 설명하지 못했었다.

이번에 라이브러리에 대해서 학습하게 되어, 이를 계기로 한번 알아보고 개념을 정립하게 되었다.

## 🏠 프레임워크란?

내가 원하는 기능 구현하기 위한 필요한 기능을 갖추고 있는 골격, 뼈대를 의미한다.
즉, 맨 땅에 헤딩하는 것이 아닌 어느정도 기반이 다져져있는 상태에서 시작한다는 점에서 상당히 중요하다.

애플리케이션 개발 시 **필수적인 코드**, **알고리즘**, **DB 연동**과 같은 기능들을 위해 어느 정도 **뼈대(구조)를 제공**하며 이러한 뼈대 위에서 **사용자는 코드를 작성하여 애플리케이션을 개발**한다. 앱/서버 등의 구동, 메모리 관리, 이벤트 루프 등의 **공통된 부분은 프레임워크가 관리**하며, **사용자는 프레임워크가 정해준 방식대로 클래스, 메서드들을 구현**하면 된다고 한다.

## 💻 라이브러리란?

> **`사전적 정의`**
> 소프트웨어를 개발할 때 컴퓨터 프로그램이 사용하는 **비휘발성 자원의 모임**.
> 즉 특정 기능을 모와둔 코드, 함수들의 집합이며 **코드 작성 시 활용 가능한 도구**들을 의미합니다.

## 프레임워크와 라이브러리의 차이점

![](https://velog.velcdn.com/images/dovelop/post/c993382a-b9c6-4cea-aee3-e58179953d6d/image.PNG)

<div style="border:5px solid skyblue">
프레임워크는 단지 미리 만들어준 반제품이나, 확장해서 사용할 수 있도록 준비된 추상 라이브러리의 집합이 아니다.<br>
프레임워크가 어떤 것인지 이해하려면 라이브러리와 프레임워크가 어떻게 다른지 알아야 한다.

라이브러리를 사용하는 애플리케이션 코드는 **애플리케이션 흐름을 직접 제어**한다.
단지 동작하는 중에 **필요한 기능이 있을 때 능동적으로 라이브러리를 사용할 뿐**이다.

반면에 프레임워크는 **거꾸로 애플리케이션 코드가 프레임워크에 의해 사용**된다.
프레임워크에는 **분명한 [제어의 역전] 개념이 적용되어 있어야 한다.**

애플리케이션 코드는 프레임워크가 짜 놓은 틀에서 **수동적으로 동작해야 한다.**

**토비의 스프링 中**

</div>
<a href="https://mangkyu.tistory.com/4">참고 자료</a>

지금까지 나는 React가 웹 프레임워크 중 하나라고 생각했는데, 실제로는 라이브러리였다...

![](https://velog.velcdn.com/images/dovelop/post/096aea58-73fe-49f5-b5f1-cf1c133ab879/image.PNG)

그 이유가 궁금했는데, 위에서 인용한 말에 정답이 있다.

프레임워크, 라이브러리 둘 다 공통의 기능을 사용하여 결과물을 만드는 것으로 비슷해 보이지만, 둘의 차이점은 **어플리케이션의 제어 흐름의 권한을 누가 가지고 있느냐**가 핵심이다.

1. **프레임워크** : 정해진 **프로그램의 틀에 맞게** 사용자가 필요한 기능을 입력함

2. **라이브러리** : 호출하는 개발자가 필요한 기능을 **원할 때 호출**함

---

## UI Framework with Ant-Design

**Ant-Design**과 **Material-UI**는 **`디자이너의 도움 없이`** 개발자가 스스로 디자인된 컴포넌트를 만들 수 있도록 도와주는 **`UI 프레임워크`** 이다.
<a href="https://ant.design/">Ant-Design 공식 홈페이지</a>
<a href="https://mui.com/material-ui/">Material-UI 공식 홈페이지</a>

오늘은 간단하게 Ant-design icon 사용으로 연습을 해보았다.

**❗️ 주의 ❗️**
**Ant Desing의 icon을 사용하기 위해서는 설치 해주어야 함.**
아래 명령어를 터미널에 입력해준다.
**`yarn add @ant-design/icons`**

---

### 1. 다양한 아이콘들

![](https://velog.velcdn.com/images/dovelop/post/3c323506-fcce-41a9-8e1c-0a0595c6f787/image.png)

### 2. 색다른 체크박스: 기존의 네모칸 체크박스를 다르게 표현한 것입니다.

### 3. 회전하는 로딩: 회전하는 로딩 이미지도 사용 가능합니다.

### 4. 이미지 컨트롤: 이미지를 조작하는 많은 기능들을 제공합니다.

![](https://velog.velcdn.com/images/dovelop/post/8a9ad9f8-516a-4094-af04-4f4ac077275a/image.png)

### 5. 달력: 이미 만들어진 달력으로 시간을 절약할 수 있습니다.

![](https://velog.velcdn.com/images/dovelop/post/37e08400-35fe-43fb-8704-9b50f47cbf46/image.png)

---

생각보다 엄청나게 많은 아이콘과 기능들이 많아서 신세계였다.
얼른 내 게시물 프로젝트에도 Ant-design 프레임워크를 사용해보고 싶다.
