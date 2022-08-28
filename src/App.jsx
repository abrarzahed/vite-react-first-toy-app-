import { Navbar } from "../components/Navbar";
import { Main } from "../components/Main";
import { useEffect, useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  return (
    <div className="container">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Main isDark={isDark} />
    </div>
  );
}
