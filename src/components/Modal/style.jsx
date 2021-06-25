import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalContainer = styled(Modal)`
  width: 100%;
  .modal-dialog {
    @media (max-width: 600px) {
      width: 100vh;
      max-width: 100%;
      margin: 0;
      padding: 0;
      border: none;
      border-radius: none;
    }
  }
  .modal-content {
    width: 580px;
    height: 600px;
    background: white;
    @media (max-width: 600px) {
      width: 100vh;
      height: 100vh;
      max-width: 100%;
      max-height: 100%;
      border: none;
      border-radius: 0 !important;
      overflow-y: hidden;
      overflow-x: hidden;
    }
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 10px;
    max-height: 5%;
    border-bottom: none;
    padding-left: 10px;
    padding-right: 10px;
    @media (max-width: 600px) {
      padding-top: 0;
      padding-left: 24px;
      padding-right: 0;
      margin-bottom: 0.5rem;
      max-height: auto;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .close {
    outline: none;
  }

  .modal-body {
    height: 800px;
    @media (max-width: 600px) {
      height: auto;
      max-height: 400px;
      overflow-y: scroll;
    }
  }

  .modal-footer {
    width: 100%;
    border-top: none;
  }
`;
const Container = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  min-width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  svg {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const SubContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
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

export { ModalContainer, Container, SubContainer, Button };
