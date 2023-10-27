import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const StyledModal = styled(Modal)`
  .modal-body,
  .modal-footer {
    padding: 1.5rem;
  }

  & .modal-body {
    font-size: 1.8rem;
    font-weight: 500;
  }

  & .btn {
    font-size: 1.6rem;
  }
`;
