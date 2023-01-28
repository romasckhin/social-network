import cls from './Dialogs.module.css'
import Dialogitem from './Dialogitem';
import Message from './Message';

const Dialogs = ({dialogs, messages}) => {


    return (
        <div className={cls.dialogs}>
           <div className={cls.dialogsItems}>
                {
                    dialogs.map(dialog => <Dialogitem
                        key={dialog.id}
                        name={dialog.name}
                        id={dialog.id}
                    />)
                }
           </div>

            <div className={cls.messages}>
               {
                    messages.map(mes => <Message
                        key={mes.id}
                        message={mes.message}
                        id={mes.id}
                    />)
               }
            </div>

        </div>
    );
};

export default Dialogs;