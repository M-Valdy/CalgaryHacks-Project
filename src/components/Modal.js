
import React from 'react';
const Modal = ({children, isOpen, onClose}) => {
    return (isOpen &&(
        <div>
            <div>
                <div>
                    {children}
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    ))
    
}

export default Modal