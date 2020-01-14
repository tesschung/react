https://velopert.com/3417


### SPA?
블로그를 만든다면, 
홈, 포스트 목록, 포스트, 글쓰기 등의 화면 존재
또한 이 화면에 따라 주소도 만들어줘야한다.
주소가 있어야, 유저들이 북마크도 할 수 있고 서비스에 구글을 통해 유입될 수 있기 때문
다른 주소에 따라 다른 뷰를 보여주는것을 라우팅 이라고한다.
리액트 자체에는 이 기능이 내장되어있지 않습니다. 따라서 우리가 직접 브라우저의 API 를 사용하고 상태를 설정하여 다른 뷰를 보여주어야 합니다.


react-router 는,
써드파티 라이브러리로서, 비록 공식은 아니지만 (페이스북 공식 라우팅 라이브러리는 존재하지 않습니다) 가장 많이 사용되고 있는 라이브러리인데요. 
이 라이브러리는 클라이언트 사이드에서 이뤄지는 라우팅을 간단하게 해줍니다. 
게다가 서버 사이드 렌더링도 도와주는 도구들이 함께 딸려옵니다. 
추가적으로 이 라우터는 react-native 에서도 사용 될 수 있습니다


### 프로젝트 생성 및 라이브러리 설치
먼저 create-react-app 으로 프로젝트를 생성하세요.

$ create-react-app react-router-tutorial
그 다음엔, 해당 프로젝트 디렉토리로 이동하여 리액트 라우터를 설치하세요.

$ yarn add react-router-dom
$ yarn add cross-env --dev
react-router-dom: 브라우저에서 사용되는 리액트 라우터 입니다.
cross-env: 프로젝트에서 NODE_PATH 를 사용하여 절대경로로 파일을 불러오기 위하여 환경 변수를 설정 할 때 운영체제마다 방식이 다르므로 공통적인 방법으로 설정 할 수 있게 해주는 라이브러리입니다.


### 프로젝트 초기화 및 구조 설정

- 파일 제거
src/App.js
src/App.css
src/App.test.js
src/logo.svg

- 디렉토리 생성
src/components: `컴포넌트`들이 위치하는 디렉토리입니다.
src/pages: `각 라우트들`이 위치하는 디렉토리 입니다.
src/client: 브라우저 측에서 사용할 `최상위 컴포넌트` 입니다. 우리가 추후 서버사이드 렌더링을 구현 할 것이기 때문에 디렉토리를 따로 구분하였습니다. (서버사이드 렌더링을 할 때에는 서버 전용 라우터를 써야합니다.) 여기서 `라우터를 설정`합니다.
src/server: 서버측에서 사용 할 `리액트 관련 코드`를 여기에 넣습니다.
src/shared: 서버와 클라이언트에서 공용으로 사용되는 컴포넌트 `App.js` 가 여기에 위치합니다.
src/lib: 나중에 웹 연동을 구현 할 때 사용 할 `API`와 코드스플리팅 할 때 필요한 코드가 여기에 위치합니다.
*코드스플리팅(code-splitting): 
https://velog.io/@velopert/react-code-splitting
- 우리가 자바스크립트로 애플리케이션을 개발하게 되면, 기본적으로는 하나의 파일에 모든 로직들이 들어가게 됩니다. 그럼, 프로젝트의 규모가 커질수록 자바스크립트 파일 용량도 커지겠죠? 용량이 커지면, 인터넷이 느린 환경에서는 페이지 로딩속도도 느려질 것입니다.
코드 스플리팅을 하게 되면, 지금 당장 필요한 코드가 아니라면 따로 분리시켜서, 나중에 필요할때 불러와서 사용 할 수 있습니다. 이를 통하여, 페이지의 로딩 속도를 개선 할 수 있죠.
- 함수를 위에서 import하지 않고, 메소드 안에서 사용할때만 불러오는 형식


- NODE_ENV 설정
코드들을 불러올 때 ‘../components/Something’ 이런식으로 불러와야 하는 코드를 ‘components/Something’ 이렇게 불러 올 수 있도록 프로젝트의 루트경로를 설정
package.json 파일의 script 부분을 다음과 같이 수정

```js
  "scripts": {
    "start": "cross-env NODE_PATH=src react-scripts start",
    "build": "cross-env NODE_PATH=src react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
```

- 컴포넌트 준비하기
App 컴포넌트를 만들어주세요. 
어떤 주소로왔을때 무엇을 보여줄 지, 나중에 여기서 정의
지금은 일단 비어있는 컴포넌트를 만드세요. => App.js



Yarn add immer # 불변성유지가 더 쉬움

Yarn add styled-components



카카오 프론트

https://steemit.com/zzan/@anpigon/6np73q-react-native

yarn add react-kaka-login







https://velopert.com/2937

### **메뉴 아이템 클릭시 페이지 이동**



<Link to='/'></Link>

https://electricburglar.tistory.com/152?category=710260





