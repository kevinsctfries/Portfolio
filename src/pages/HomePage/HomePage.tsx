import "./homepage.scss";
import portrait from "../../assets/Portrait.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="portrait-wrapper">
        <img src={portrait} alt="" className="portrait" />
      </div>
      <div className="highlight-yellow">
        <p>
          Hello, my name is <span>Kevin Fries</span>, and I like making
          websites!
        </p>
        <p>You can check out my work and projects below.</p>
      </div>
    </div>
  );
};

export default HomePage;
