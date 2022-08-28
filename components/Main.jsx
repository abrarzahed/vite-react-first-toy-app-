export const Main = function (props) {
  console.log(props.isDark);
  return (
    <main className={props.isDark ? "dark" : "light"}>
      <h1 className="main-heading">Fun facts about React</h1>
      <ul className="main-content">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>
          Powers thousands of enterprise apps,
          <br /> including mobile apps
        </li>
      </ul>
      <img className="react-logo-bg" src="/reactjs-icon-bg.png" alt="image" />
    </main>
  );
};
