import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/use-dark-mode";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();

  return (
    <button
      className="grid aspect-square place-items-center rounded-full border-2 p-2 text-gray-800  duration-500 dark:bg-gray-800 dark:text-white"
      onClick={() => setDarkTheme(!darkTheme)}
    >
      {darkTheme ? <FaSun /> : <FaMoon />}
    </button>
  );
};

const Header = () => {
  return (
    <header className="w-full bg-slate-50 dark:bg-[#1b1f23] dark:text-white">
      <nav className="container mx-auto flex w-full items-center justify-between px-4 py-4 ">
        <NavLink to="/" className="text-4xl font-bold">
          Loker
          <span className=" ml-1  rounded-sm bg-gradient-to-tr from-blue-800 to-blue-500 px-1 text-white  dark:bg-gradient-to-tl dark:from-slate-800 dark:to-slate-500">
            in
          </span>
        </NavLink>
        <div className="flex items-center gap-2">
          <NavLink
            to="/profile"
            className="rounded-lg  px-4 py-2 text-lg font-semibold text-black dark:text-white "
          >
            Profile
          </NavLink>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
