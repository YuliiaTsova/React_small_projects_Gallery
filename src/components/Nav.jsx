export const Nav = ({ categoryActiv, onClickCategory }) => {
  const CATEGORIES = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Seas' },
    { id: 2, name: 'Mountains' },
    { id: 3, name: 'Architecture' },
    { id: 4, name: 'Cities' },
  ];
  return (
    <>
      <nav className="header__nav">
        <ul className="tags">
          {CATEGORIES.map((el) => (
            <li
              key={el.name}
              className={el.id === categoryActiv ? 'active' : ''}
              onClick={() => onClickCategory(el.id)}
            >
              {el.name}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
