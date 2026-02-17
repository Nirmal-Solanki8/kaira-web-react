import mainimg from "../assets/single-image-2.jpg";

const Mainproduct = () => {
  return (
    <>
      <div className="mainproduct">
        <div className="main img">
          <img src={mainimg} alt="main" />
        </div>
        <div className="maindis">
          <h1>Classic Winter Collection</h1>
          <p>
            Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus,
            gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat
            pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies
            quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis
            donec dolor id in. Pulvinar commodo mollis diam sed facilisis at
            cursus imperdiet cursus ac faucibus sit faucibus sit libero.
          </p>
          <br/>
          <button className="mainbtn">SHOP COLLECTION</button>
        </div>
      </div>
    </>
  );
};

export default Mainproduct;
