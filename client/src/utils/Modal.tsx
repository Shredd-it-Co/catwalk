import React, { ReactElement, useContext } from 'react';
import ReactDOM from 'react-dom';
import Contexts from '../contexts/Contexts';

export default function Modal(): ReactElement {
  const { modalContent, setModalContent } = useContext(Contexts.ModalContext);

  const onClose = () => {
    setModalContent(null);
  };

  if (modalContent) {
    return ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div className="modal-backdrop"></div>
        <div className="modal-box">
          <button onClick={onClose}>Close</button>
          {modalContent}
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  }

  return null;
};