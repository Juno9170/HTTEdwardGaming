import "./Banner.style.scss";

function Banner() {
  return (
    <div className="Banner bg-gradient-to-r from-theme to-red-800 px-12">
      <img src="/carleton_logo.png" alt="logo" />
      <div className="Banner__seperator"></div>
      <div className="Banner__title">Carleton Central</div>
    </div>
  );
}

export default Banner;
