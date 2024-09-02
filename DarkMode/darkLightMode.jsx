import useLocalStorage from "./useLocalStorage";
import "../component/style.css"

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello world!</p>
        <button onClick={handleToggleTheme}>{theme==='dark'? "Light":"Dark"}</button>
      </div>
    </div>
  );
}
