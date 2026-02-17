import Menimg from '../assets/cat-item1.jpg'
import Femaleimg from '../assets/cat-item2.jpg'
import kidimg from '../assets/cat-item3.jpg'

const Section2 = () => {
  return (
    <>
      <div className="section2">
        <div>
          <h1>Book An Appointment</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. illum{" "}
          </p>
        </div>
        <div>
          <h1>Pick Up Store</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. illum{" "}
          </p>
        </div>
        <div>
          <h1>Spacial Packaging</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. illum{" "}
          </p>
        </div>
        <div>
          <h1>Free Globle Return</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. illum{" "}
          </p>
        </div>
      </div>

      <div className="category">
        <div className="card2">
          <div className="hero-card">
            <img src={Menimg} alt="A" />
            <p>Shop For Men</p>
          </div>
        </div>
        <div className="card2">
          <div className="hero-card">
            <img src={Femaleimg} alt="A" />
            <p>Shop For Female</p>
          </div>
        </div>
        <div className="card2">
          <div className="hero-card">
            <img src={kidimg} alt="A" />
            <p>Shop For Kid</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
