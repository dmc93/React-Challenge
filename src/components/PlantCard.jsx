

function PlantCard({name, price, imageUrl}) {
  return (
    <div className="card">
        <h2>{name}</h2>
        <h3>£{price.toFixed(2)}</h3>
        <img className="card-image" src={imageUrl} alt="broken image" height={"150 px"} />
        <br/>
        <button className="cartButton">🛒 Add to Cart</button>
    </div>
      
  );
};

export default PlantCard;

// {itemsData.map((item) => (
//     <div key={item.id}>
//       <h1>{item.name}</h1>
//       <h3>£{item.price.toFixed(2)}</h3>
//       <img className="card-image" src={item.imageUrl} />
//     </div>
//   ))}