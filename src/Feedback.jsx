import img1 from "./assets/insta-item1.jpg";
import img2 from "./assets/insta-item2.jpg";
import img3 from "./assets/insta-item3.jpg";
import img4 from "./assets/insta-item4.jpg";
import img5 from "./assets/insta-item5.jpg";
import img6 from "./assets/insta-item6.jpg";

const Feedback = () => {
  return (
    <>
      <div className="feedback">
        <h1>Sign Up for our newsletter</h1>
        <input type="text" placeholder="Your Email Address" />
        <button id="emailbtn">SIGN UP</button>
      </div>
      <div className="feedbackimg">
        <img src={img1} alt="a" />
        <img src={img2} alt="a" />
        <img src={img3} alt="a" />
        <img src={img4} alt="a" />
        <img src={img5} alt="a" />
        <img src={img6} alt="a" />
      </div>
      <div className="followbtn">
        <button className="instabtn">Follow us on Instagram</button>
      </div>
    </>
  );
};

export default Feedback;
