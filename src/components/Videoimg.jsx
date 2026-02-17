import bg from "../assets/video-image.jpg";

const Videoimg = () => {
  return (
    <div className="videocontainer">
      <img src={bg} alt="video background" className="bg" />

      <div className="circle-wrapper">
        <svg viewBox="0 0 200 200" className="circle-text">
          <defs>
            <path
              id="circlePath"
              d="
                M 100, 100
                m -75, 0
                a 75,75 0 1,1 150,0
                a 75,75 0 1,1 -150,0
              "
            />
          </defs>

          <text>
            <textPath href="#circlePath">
              - CLASSIC COLLECTION 2022 - CLASSIC COLLECTION 2022
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Videoimg;
