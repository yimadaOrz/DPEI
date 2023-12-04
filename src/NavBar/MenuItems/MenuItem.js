import Dropdown from '../DropDown/DropDown';
import './MenuItem.css';

const MenuItems = ({ items }) => {
 return (
  <li className="dropdown-content">
   {items.submenu ? (
    <>
     <button type="button" aria-haspopup="menu">
      {items.title}{" "}
     </button>
     <Dropdown submenus={items.submenu} />
    </>
   ) : (
    <a href="/#">{items.title}</a>
   )}
  </li>
 );
};

export default MenuItems;