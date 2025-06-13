import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="portrait-wrapper">
        <img src="/public/Portrait.jpg" alt="" className="portrait" />
      </div>
      <p>
        Hello, my name is <span>Kevin Fries</span>, and I like making websites!
      </p>
      <p>You can check out my work and projects below.</p>
    </div>
  );
};

export default HomePage;
