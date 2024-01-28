import React, { useState } from 'react';
import '../FullScreenModal.css'; // Import your CSS file for styling

const FullScreenModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="app">
      <button onClick={toggleModal}>Open Modal</button>

      {modalOpen && (
        <div className="fullscreen-modal">
          <div className="modal-content">
            <h2>Your Modal Content</h2>
            <p>This is a full-screen modal.</p>
            <button onClick={toggleModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullScreenModal;
