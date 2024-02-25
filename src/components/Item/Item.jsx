const Item = ({ id, img, description }) => {
  return (
    <div key={id}>
      <img src={img} alt="car" />
      <p>{description}</p>
    </div>
  );
};

export default Item;