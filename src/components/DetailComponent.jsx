function Detail({ data }) {
  const { image, category, name, price } = data;
  return (
    <div className="flex flex-column">
      <img className="product-image" src={image} alt="image" />
      <p>{category}</p>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}

export default Detail;
