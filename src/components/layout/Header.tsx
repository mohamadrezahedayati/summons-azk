import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { UserContext } from '../../contexts/user.context';
import { useContext } from 'react';


const Header = () => {
    const { currentUser } = useContext(UserContext);
    /*@ts-ignore */
    const fullName = currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : ''

    return (
        <header className='flex flex-row justify-between p-5'>
            <div>
                <Logo />
            </div>
            <div>
                سامانه مقایسه و خرید آنلاین بیمه
            </div>
            <div>
                {fullName ?
                    (<span> {fullName} </span>
                    ) : (<Link to="/">ثبت نام</Link>)
                }
            </div>
        </header>
    );
};
export default Header;