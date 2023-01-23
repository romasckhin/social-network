import cls from './Dialogs.module.css'


const Message = ({message}) => {
    
    return (
        <div className={cls.message}>
            {message}
        </div>
    );
};

export default Message;