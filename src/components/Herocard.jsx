const Herocard = ({ image, name, description }) => {
  return (
    <>
      <div className="hero-card">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <a> DISCOVER NOW</a>
      </div>
    </>
  );
};

export default Herocard;
