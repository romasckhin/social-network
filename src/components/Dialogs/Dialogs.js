import cls from './Dialogs.module.css'
import { v4 as uuidv4 } from 'uuid';
import Dialogitem from './Dialogitem';
import Message from './Message';

const Dialogs = () => {

    let dialogs = [
        { id: uuidv4(), name: 'Roman' },
        { id: uuidv4(), name: 'Alina' },
        { id: uuidv4(), name: 'Sabina' },
        { id: uuidv4(), name: 'Arsen' },
        { id: uuidv4(), name: 'Mandarina' },
    ]

    let messages = [
        { id: uuidv4(), message: 'Hi' },
        { id: uuidv4(), message: 'House' },
        { id: uuidv4(), message: 'Apartament' },
    ]

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