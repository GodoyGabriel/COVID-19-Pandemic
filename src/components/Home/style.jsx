import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-weight: 900;
  text-transform: uppercase;
`;

const Paragraph = styled.p``;

export { Container, SubContainer, Title, Paragraph };
