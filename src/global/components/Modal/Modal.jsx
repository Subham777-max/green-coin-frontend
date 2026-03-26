import React from "react";
import "./Modal.style.scss";

const Modal = ({ type, title, message, onConfirm, onCancel, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3>{title}</h3>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          {type === "confirm" && (
            <button className="btn-cancel" onClick={onCancel}>
              Cancel
            </button>
          )}
          <button className="btn-confirm" onClick={onConfirm}>
            {type === "confirm" ? "Confirm" : "OK"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
