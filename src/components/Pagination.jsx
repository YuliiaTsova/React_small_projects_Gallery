export const Pagination = ({ page, onClickPage }) => {
  // MockAPI doesn't return a count of pages
  return (
    <nav className="pagination__nav">
      <ul className="pagination">
        {[...Array(4)].map((_, i) => (
          <li
            key={i + 1}
            onClick={() => onClickPage(i + 1)}
            className={i + 1 === page ? 'active' : ''}
          >
            {' '}
            {i + 1}
          </li>
        ))}
      </ul>
    </nav>
  );
};
