https://zldnlto.github.io/login-with-modal/

[] input checkbox 레티나 적용가능하게 해보자

- 🐛 모달창 header 하단 border 1px 뜨는데 왜그럴까?  
  => line-height: 1때문인 것은 확인

- `a`태그의 가상요소 '|' 도 페이지 이동 기능을 하고 있기에

```
  pointer-events: none;
  cursor: default;
```

로 비활성화 해보려 했는데 안된다. 방법 없을까

- `input` placehloder가 일회성인 문제  
  => `<span>`을 이용해서 따로 placeholder 역할을 하도록 하면 된다고 한다. 일단 현업에서 크게 신경쓰고 있는 부분은 아닌 것 같으므로 `placeholder:transparent`은 제거하였다.
