import './Header.scss';

type HeaderProps = {
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
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
        <a className="menu-link menu-link--selected" href="#header">
          Accueil
        </a>
        {categories.map((category) => (
          <a className="menu-link" href="#header" key={category.id}>
            {category.name}
          </a>
        ))}
        <button className="menu-btn" type="button" onClick={handleZenMoode}>
          {zenModeStatus ? 'Désactiver' : 'Activer'} le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
