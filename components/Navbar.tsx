import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NavList } from './NavList';

export const Navbar:React.FC = () => {
  return (
    <header className="header-container">
      <MenuRoundedIcon className="header-icon"/>

      <NavList />
    </header>
  )
}
