import React from 'react';
import { useGlobalContext } from 'hooks/useGlobalContext';
import { StyledModal } from './Modal.styled';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

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
        <p>Apologies but we could not load new cats for you at this time! Miau!</p>
      </StyledModal.Body>
      <StyledModal.Footer>
        <Button variant='outline-primary'>Go back to home page</Button>
      </StyledModal.Footer>
    </StyledModal>
  );
};

export default Modal;
