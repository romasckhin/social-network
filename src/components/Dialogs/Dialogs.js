import cls from './Dialogs.module.css'
import Dialogitem from './Dialogitem';
import Message from './Message';

const Dialogs = (props) => {

    let state = props.dialogsReducer
    

    const addButtonMessage = () => {
       props.addMessage()
    }
    
    const onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessage(text)        
    }

    return (
        <div className={cls.dialogs}>
           <div className={cls.dialogsItems}>
                {
                    state.dialogs.map(d => <Dialogitem
                        key={d.id}
                        name={d.name}
                    />)
                }
           </div>

            <div className={cls.messages}>
            <input onChange={onMessageChange} value={state.newMessageText}/>
            <button onClick={addButtonMessage} >click</button>

               {
                    state.messages.map(m => <Message
                        key={m.id}
                        message={m.message}
                    />)
               }
            </div>

        </div>
    );
};

export default Dialogs;