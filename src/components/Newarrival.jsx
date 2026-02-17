import product from "./newarrivaldata";

const Newarrival = () => {
  return (
    <>
      <div >
        <div className="newarrival">
          <h1>OUR NEW ARRIVALS</h1>
          <p>VIEW ALL PRODUCTS</p>
        </div>
        <div className="newpro">
          {product.map((item) => (
            <div className="card3" key={item.id}>
              <img src={item.image} alt="name" />
              <h3>{item.name}</h3>
              <p>{"$" +item.price.toFixed(2) }</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Newarrival;
