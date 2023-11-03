import { NavLink } from 'react-router-dom';
import './Header.scss';
import { Category } from '../../@Types/Post';

type HeaderProps = {
  categories: Category[];
  zenModeStatus: boolean;
  setZenMode: (status: boolean) => void;
};

function Header({ categories, zenModeStatus, setZenMode }: HeaderProps) {
  const handleZenMoode = () => {
    if (zenModeStatus) {
      setZenMode(false);
    } else {
      setZenMode(true);
    }
  };

  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        <NavLink
          className={({ isActive }) =>
            `menu-link ${isActive ? 'menu-link--selected' : ''}`
          }
          to="/"
        >
          Accueil
        </NavLink>
        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              `menu-link ${isActive ? 'menu-link--selected' : ''}`
            }
            to={`/category/${category.slug}`}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}

        <button className="menu-btn" type="button" onClick={handleZenMoode}>
          {zenModeStatus ? 'Désactiver' : 'Activer'} le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
