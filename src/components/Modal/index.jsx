import React, {useEffect, useState} from "react";
import { ModalContainer, Container, SubContainer, Button} from "./style";
import Modal from 'react-bootstrap/Modal';
import {ImCross} from 'react-icons/im';

export default function ModalCountry(props) {
  const { show, handleClose, data } = props;
  useEffect(() => {
    if(data){
      console.log(`data`, data)
    }
  }, [data]);

  const closeModal = () => {
    if (typeof handleClose === 'function') {
      handleClose()
    }
  }
  if(!data){
    return null;
  }
  return (
    <ModalContainer show={show} onHide={closeModal} animation={true}>
     <Modal.Header>
       <Container>
         <SubContainer className="imageContainer"><img src={`https://www.countryflags.io/${data.abbreviation}/shiny/64.png`}/></SubContainer>
         <SubContainer className="dataContainer">tesdas</SubContainer>
         <SubContainer className="crossContainer"><ImCross onClick={closeModal}/></SubContainer>
       </Container>
       </Modal.Header>
     <Modal.Body><h1>body</h1></Modal.Body>
    </ModalContainer>
  );
}
