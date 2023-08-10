import { FC, useState, Dispatch, SetStateAction } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavItem, NavItemMobile, NavImage } from "@/components/ui/Navbar";
interface NavbarProps {
  setPageFixed: Dispatch<SetStateAction<string>>;
}

const Navbar: FC<NavbarProps> = ({ setPageFixed }) => {
  const [menuDisplay, setMenuDisplay] = useState(true);
  const [displayMenuStyle, setDisplayMenuStyle] = useState("");

  // Enables the dropdown menu to be fixed on scree with setPageFixed
  // Enables the dropdown menu to have open and close functionality with setMenuDisplay and setDisplayMenuStyle
  const showMenu = () => {
    setMenuDisplay(!menuDisplay);
    if (menuDisplay) {
      setDisplayMenuStyle("");
      setPageFixed("fixed");
    } else {
      setDisplayMenuStyle("none");
      setPageFixed("");
    }
    return displayMenuStyle;
  };

  return (
    <header className="sticky top-0 z-10 bg-transparent bg-gradient-to-r from-[#2980B9] via-[#6DD5FA] to-[#FFFFFF]">
      <nav className="navbar">
        <div className="flex-1">
          <NavImage
            href="https://charlestrangay.com/"
            imgSrc="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/MyLogo.png?alt=media&token=8bb3bf7b-7b35-4774-a8e3-b163699d024e"
          />
        </div>
        <section className="flex-none hidden md:block">
          <ul className="menu menu-horizontal px-1">
            <NavItem navItemName="Home" href="#hero" />
            <NavItem navItemName="Projects" href="#projects" />
            <NavItem navItemName="Contact" href="#contact" />
          </ul>
        </section>
        <section className="dropdown dropdown-end md:hidden" onClick={showMenu}>
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <AiOutlineMenu className="text-xl" />
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content -mr-2 mt-2 p-2 shadow bg-base-100 w-screen h-screen z-10 ${
              displayMenuStyle == "none" ? "hidden" : ""
            }`}
            //style={{ display: displayMenuStyle }}
          >
            <NavItemMobile navItemName="Home" href="#hero" />
            <NavItemMobile navItemName="Projects" href="#projects" />
            <NavItemMobile navItemName="Contact" href="#contact" />
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;