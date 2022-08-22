export const Navbar = function () {
  return (
    <nav className="nav">
      <div className="nav-left">
        <img className="logo" src="/react.svg" alt="image" />
        <h2 className="brand">ReactFacts</h2>
      </div>
      <ul className="nav-right list">
        <li className="list-item">React Course</li>
        <li className="list-item">Project 1</li>
      </ul>
    </nav>
  );
};
