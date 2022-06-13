import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./GetStarted.css";

export const GetStarted = ({ title1, title2, desc, blue_high }) => {
  return (
    <div className="get-started-cont">
      <h1 className="get-started-title">
        {title1} <span>{blue_high}</span> {title2}
      </h1>
      <p className="get-started-desc">
        {desc}
      </p>
      <div className="get-started-buttons">
        <button className="btn btn-primary" id="get-started-btn">
          Get Started <ArrowRightAltIcon />
        </button>
        <button className="btn btn-white" id="signin-btn">
          Sign In <ArrowRightAltIcon />
        </button>
      </div>
    </div>
  );
};
