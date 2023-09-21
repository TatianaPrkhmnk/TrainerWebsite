import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MyNavbar from './MyNavbar/MyNavbar'
import MyModal from './MyModal/MyModal'

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <MyNavbar onOpenModal = {handleOpenModal}/>
        <Container>
          
        </Container>

      <MyModal showModal={ showModal} onCloseModal={handleCloseModal}/>
    </>
  );
};
