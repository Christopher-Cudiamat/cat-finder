import React from 'react';
import { useGlobalContext } from 'hooks/useGlobalContext';
import { StyledModal } from './Modal.styled';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import text from 'contents/text.json';

const Modal: React.FC = () => {
  const { globalState, setGlobalState } = useGlobalContext();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    navigate('/');
    setGlobalState({ ...globalState, error: false, breedId: '' });
  };

  return (
    <StyledModal
      show={globalState?.error}
      onClick={handleCloseModal}
    >
      <StyledModal.Body>
        <h1>{text.errorMessage}</h1>
      </StyledModal.Body>
      <StyledModal.Footer>
        <Button variant='outline-primary'>{text.goBackToHomePage}</Button>
      </StyledModal.Footer>
    </StyledModal>
  );
};

export default Modal;
