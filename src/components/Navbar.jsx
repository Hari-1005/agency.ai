import { useState } from "react";
import assets from "../assets/assets";

const Navbar = ({ theme, setTheme }) => {
    const [sideBar, setSideBar] = useState(false);
  return (
    <div className="font-medium px-4 sm:px-12 lg:px-24 xl:px-40 py-4 flex justify-between items-center sticky top-0 z-20 backdrop-blur-xl bg-white/50">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="logo"
        className="w-32 sm:w-40"
      />

      <div className={`${!sideBar ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:text-white max-sm:pt-20 max-sm:bg-primary flex gap-5 sm:items-center text-gray-700 sm:text-sm transition-all`}>

        <img src={assets.close_icon} alt="close-icon" className="w-5 absolute top-4 right-4 sm:hidden" onClick={() => setSideBar(false)}/>

        <a onClick={() => setSideBar(false)} href="#" className="sm:hover:border-b">
          Home
        </a>
        <a onClick={() => setSideBar(false)} href="#services" className="sm:hover:border-b">
          Services
        </a>
        <a onClick={() => setSideBar(false)} href="#our-work" className="sm:hover:border-b">
          Our work
        </a>
        <a onClick={() => setSideBar(false)} href="#testimonial" className="sm:hover:border-b">
          Testimonial
        </a>
      </div>

      <div className="">
        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="menu-icon" className="w-8 sm:hidden" onClick={()=>setSideBar(true)}/>

        <a href="#contact-us" className="text-sm max-sm:hidden bg-primary text-white flex items-center gap-2 px-6 py-2 rounded-full cursor-pointer">
          Connect <img src={assets.arrow_icon} width={14} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
