import cls from './Dialogs.module.css'
import React from 'react';

const Message = ({message}) => {

    
    return (
        <div className={cls.message}>
                  
            
            <div>
                {message}
            </div>

        </div>
    );
};

export default Message;