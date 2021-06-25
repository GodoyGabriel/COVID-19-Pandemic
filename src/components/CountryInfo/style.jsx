import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  min-width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

const SubContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  &.contentContainer {
    /* flex-flow: row wrap; */
    flex-flow: row;
    align-items: flex-start;
  }
  &.imageContainer {
    width: 35%;
    img {
      width: 200px;
      height: auto;
    }
  }
  &.dataContainer {
    width: 50%;
  }
  &.graphicContainer {
    height: 50%;
    width: 50%;
  }
`;
const Button = styled.button`
  border: none;
  background: transparent;
  color: white;
  outline: none;
  :focus {
    outline: none;
  }
  margin-right: 2rem;
  svg {
    font-size: 20px;
    :hover {
      transition: all 0.5s ease-in-out;
      transform: scale(1.3);
      cursor: pointer;
    }
  }
`;

export { Container, SubContainer, Button };
