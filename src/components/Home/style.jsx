import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
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
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p``;

export { Container, SubContainer, Title, Paragraph };
