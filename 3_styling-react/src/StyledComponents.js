import React, { Component } from "react";
// 단순 변수의 형태가 아니라 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우에는 css 를 불러와야 합니다.
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

// 위에 있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어 줍니다.
// 참고 : https//www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  /* 기본적으로는 가로 크기 1024px에 가운데 정렬을 하고
    가로 크기가 작아짐에 따라 크기를 줄이고
    768px 미만이 되면 꽉 채웁니다. */
  width: 1024px;
  margin: 0 auto;
  /* @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
      width: 100%;
    } */
  /* styled-components 유틸 함수 */
  ${media.desktop`width:768px;`}
  ${media.tablet`width:100%;`};
`;

const Button = styled.button`
  /*버튼에 스타일*/
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0);
  }

  ${(props) =>
    props.inverted &&
    css`
      /*inverted값이 true일 때 실행*/
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponents = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponents;
