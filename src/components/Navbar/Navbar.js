import cls from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}>Profile</div>
            <div className={cls.item}>Message</div>
            <div className={cls.item}>News</div>
            <div className={cls.item}>Misic</div>
        </nav>
    );
};

export default Navbar;