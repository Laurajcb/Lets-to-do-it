import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <section className='modal-container'>
      <div className="modal-background">
        {children}
      </div>
    </section>,
    document.getElementById('modal')
  );
}

export { Modal };
