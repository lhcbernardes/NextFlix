
import React, { useState, useCallback, forwardRef, ForwardRefRenderFunction, useImperativeHandle } from 'react';

export interface ModalHandles {
    handleOpenModal: () => void;
}
const Modal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
    const [visible, setVisible] = useState(true);

    useImperativeHandle(ref, () => {
        return {
            handleOpenModal
        }
        
    }, []);

    const handleOpenModal = useCallback(() => {
        setVisible(true);
        console.log('true');
    }, []);

    const handleCloseModal = useCallback(() => {
        setVisible(false);
        console.log('false');

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