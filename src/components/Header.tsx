import Logo from "./Logo";
import ThemeChanger from "./ThemeChanger";

function Header() {
  return (
    <header className="flex items-baseline justify-between">
      <Logo />
      <ThemeChanger />
    </header>
  );
}

export default Header;
