import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NavList } from './NavList';

export const Navbar:React.FC = () => {
  return (
    <header className="header-container">
      <MenuRoundedIcon className="header-icon"/>
      <h2>JonathanDev</h2>

      <NavList />
      <div></div>
    </header>
  )
}
