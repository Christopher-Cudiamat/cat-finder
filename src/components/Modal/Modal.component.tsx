import React from 'react';
import { useGlobalContext } from 'hooks/useGlobalContext';
import { StyledModal } from './Modal.styled';
import Button from 'react-bootstrap/Button';

const Modal: React.FC = () => {
  const { globalState, setGlobalState } = useGlobalContext();

  return (
    <StyledModal
      show={globalState?.error}
      onClick={() => setGlobalState({ ...globalState, error: false })}
    >
      <StyledModal.Body>
        <p>Apologies but we could not load new cats for you at this time! Miau!</p>
      </StyledModal.Body>
      <StyledModal.Footer>
        <Button variant='secondary'>Close</Button>
      </StyledModal.Footer>
    </StyledModal>
  );
};

export default Modal;
