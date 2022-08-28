export const Navbar = function (props) {
  return (
    <nav className={!props.isDark ? "dark" : "light"}>
      <div className="nav-left">
        <img className="logo" src="/react.svg" alt="image" />
        <h2 className="brand">ReactFacts</h2>
      </div>
      <ul className="nav-right list">
        <div className={props.isDark ? "dark toggler" : "light toggler"}>
          <p className="toggler--light">Light</p>
          <div
            className={
              props.isDark ? "dark toggler--slider" : "light toggler--slider"
            }
            onClick={props.toggleTheme}
          >
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
      </ul>
    </nav>
  );
};
