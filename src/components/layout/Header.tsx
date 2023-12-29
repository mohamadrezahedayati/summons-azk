import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
return (
    <header className='flex flex-row justify-between p-5'>
        <div>
            <Logo />
        </div>
        <div>
            سامانه مقایسه و خرید آنلاین بیمه
        </div>
        <div>
            <Link to="/">ثبت نام</Link>
        </div>
    </header>
    );
};
export default Header;