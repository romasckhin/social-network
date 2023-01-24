import cls from './Dialogs.module.css'


const Dialogitem = ({name}) => {


    return (
        <div className={cls.dialog}>
            {name}
        </div>
    );
};

export default Dialogitem;