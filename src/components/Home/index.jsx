import React from "react";
import { Container, SubContainer, Title } from "./style";
import Table from "../Table";

export default function Home() {
  return (
    <Container>
      <Title>COVID-19</Title>
      <SubContainer>
        <Table />
      </SubContainer>
    </Container>
  );
}
