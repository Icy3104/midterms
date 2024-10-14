import React, { useEffect } from 'react';
import '../css/Modals.css';

const Modal = ({ show, onClose, children }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (show) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
            <div className="modal-content" onClick={(e) => e.stopPropagation()} tabIndex={0}>
                <button className="close-button" onClick={onClose} aria-label="Close modal">X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;


