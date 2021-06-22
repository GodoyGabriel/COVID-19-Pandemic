import styled from "styled-components";

const TableContainer = styled.table`
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.textColor};
  width: 100%;
  height: 100%;
  tr {
    height: 40px;
  }
  thead {
    tr {
      th {
        width: 16.6%;
        text-align: center;
        background: ${({ theme }) => theme.table.thead};
      }
    }
  }
  tbody {
    tr {
      :hover {
        transition: all 0.8s ease-in-out;
        background: #7b7a7a;
        cursor: pointer;
      }
      td {
        width: 16.6%;
        background: ${({ theme }) => theme.table.tbody};
        text-align: center;
        border-bottom: 1px solid ${({ theme }) => theme.table.borderBottom};
      }
    }
  }
`;
const SubContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  min-width: 100%;
  align-items: center;
  justify-content: flex-end;
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
const Paragraph = styled.p`
  margin-right: 1rem;
`;
export { TableContainer, SubContainer, Button, Paragraph };
