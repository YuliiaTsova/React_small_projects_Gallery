export const Collection = ({ images, name }) => {
  return (
    <div className="collection__container">
      <div className="collection">
        <img className="collection__img" src={images[0]} alt="Item" />
        {/* // <div className="collection__bottom"> */}
        <img className="collection__img" src={images[1]} alt="Item" />
        <img className="collection__img" src={images[2]} alt="Item" />
        <img className="collection__img" src={images[3]} alt="Item" />
        {/* </div> */}
      </div>
      <h4>{name}</h4>
    </div>
  );
};
