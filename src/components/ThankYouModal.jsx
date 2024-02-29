// ThankYouModal.js
import React from 'react';
import PropTypes from 'prop-types';

const ThankYouModal = ({ show, onClose, onHome }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`modal-overlay ${show ? 'show' : ''}`}
        style={{ display: show ? 'block' : 'none' }}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" style={{ color: "#7f6284" }}>Thank You!</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <p className='fw-semibold' style={{ color: "#7f6284" }}>Your message has been submitted successfully !</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="button" className="btn btn-dark" onClick={onHome}>
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ThankYouModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onHome: PropTypes.func.isRequired,
};

export default ThankYouModal;
