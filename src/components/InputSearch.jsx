export const InputSearch = ({ searchFilter, onSearch, ...props }) => {
  return (
    <input value={searchFilter} onChange={(e) => onSearch(e.target.value)} {...props} />
  );
};
