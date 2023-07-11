import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import useDarkMode from "../../hooks/use-dark-mode";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className='container dark:bg-slate-400 bg-blue-500'>
      <div className="grid grid-cols-12 p-3">
        < ThemeIcon />
        <ul>
          <li>
          <Link to={`/home`}>Home</Link>
          </li>
          <li>
          <Link to={`/events`}>Concerts</Link>
          </li>
        </ul>
        <div>PFRM Post</div>
        <div>Login/Sign Up</div>
        <div>Browse Upcoming Concerts</div>
      </div>
    </div>
  )
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon' />
      ) : (
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  );
};
