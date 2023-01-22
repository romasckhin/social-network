import cls from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={cls.dialogs}>

           <div className={cls.dialogsItems}>
                <div className={cls.dialog}>
                    Roman
                </div>
                <div className={cls.dialog}>
                    Alina
                </div>
                <div className={cls.dialog}>
                    Sabina
                </div>
                <div className={cls.dialog}>
                    Arsen
                </div>
                <div className={cls.dialog}>
                    Mandarina
                </div>
           </div>

            <div className={cls.messages}>
                <div className={cls.message}>Hi</div>
                <div className={cls.message}>House</div>
                <div className={cls.message}>Apartament</div>
            </div>

        </div>
    );
};

export default Dialogs;