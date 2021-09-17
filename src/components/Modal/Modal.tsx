
import React, { useState, useCallback, forwardRef, useImperativeHandle } from 'react';

export interface ModalHandles {
    handleOpenModal: () => void;
}
const Modal: React.RefForwardingComponent<ModalHandles> = (props, ref) => {
    const [visible, setVisible] = useState(true);

    useImperativeHandle(ref, () => {
        return {
            handleOpenModal
        }
        
    }, []);

    const handleOpenModal = useCallback(() => {
        setVisible(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setVisible(false);
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <div>
            Modal 
            <button onClick={handleCloseModal}>Fechar</button>
        </div>
    )
}

export default forwardRef(Modal);