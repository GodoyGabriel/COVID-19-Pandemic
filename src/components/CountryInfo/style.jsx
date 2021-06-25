import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  min-width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const SubContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  &.contentContainer {
    /* flex-flow: row wrap; */
    flex-flow: row;
    height: 35%;
    align-items: flex-start;
  }
  &.imageContainer {
    width: 35%;
    padding-top: 1rem;
    align-items: flex-start;
    justify-content: flex-start;
    img {
      width: 200px;
      height: auto;
    }
  }
  &.dataContainer {
    width: 60%;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 1rem;
  }
  &.buttonsContainer {
    width: 100%;
    height: 2rem;
    align-items: center;
    justify-content: space-evenly;
    flex-flow: row nowrap;
    input {
      box-shadow: inset 0px -3px 7px 0px ${({ theme }) => theme.backgroundButton};
      background: ${({ theme }) => theme.backgroundButton};
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #ffffff;
      font-family: Arial;
      width: 30%;
      height: 100%;
      font-size: 15px;
      text-decoration: none;
      :hover {
        background: linear-gradient(
          to bottom,
          #0688fa 5%,
          ${({ theme }) => theme.backgroundButton} 100%
        );
      }
    }
    .active {
      background: ${({ theme }) => theme.backgroundActiveButton};
    }
  }
  &.graphicContainer {
    width: 100%;
    height: 50%;
    flex-flow: column;
  }
  &.graphicData{
    height: 50%;
    width: 50%;
    padding-top: 9rem;
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

const Title = styled.h1`
  width: 100%;
  line-height: 5rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Paragraph = styled.p``;

export { Container, SubContainer, Button, Title, Paragraph };
