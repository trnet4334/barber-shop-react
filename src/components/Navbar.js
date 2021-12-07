import React, {useState} from "react";
import {Link} from "react-router-dom";
import MobileNav from "./MobileNav";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = () => {
  const scrollPosition = useScrollPosition()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <React.Fragment>
      {
        !isMobileNavOpen &&
        <nav
          className="w-screen bg-primary z-20 h-20 flex items-center justify-between pr-4 pl-4 font-noto fixed md:justify-center">
          <ul className="md:flex items-center text-base w-5/12 mx-4 justify-end h-full text-btn-text hidden">
            <li className="mx-2.5 lg:mx-5 hover:text-secondary cursor-pointer">
              <Link to="/about">品牌介紹</Link>
            </li>
            <li className="mx-2.5 lg:mx-5 hover:text-secondary cursor-pointer">
              <Link to="/team">團隊</Link>
            </li>
          </ul>
          <div className="w-2/12 text-btn-text">
            <Link to="/">
                            <span className={scrollPosition === 0 ? 'block text-4xl font-sati' : 'hidden'}>
                                Hooray
                            </span>
              <div
                className={scrollPosition > 0 ? 'rounded-[100%] w-14 h-14 ring-2 ring-btn-secondary m-auto' : 'hidden'}>
                <span className="font-sati text-[2.5rem]">H</span>
              </div>
            </Link>
          </div>
          <ul className="md:flex items-center text-base w-5/12 mx-4 h-full text-btn-text hidden">
            <li className="mx-2.5 lg:mx-5 hover:text-secondary cursor-pointer">
              <Link to="/news">最新消息</Link>
            </li>
            <li className="mx-2.5 lg:mx-5 hover:text-secondary cursor-pointer">
              <Link to="/gallery">作品</Link>
            </li>
            <li className="mx-2.5">
              <Link
                to="/reservation"
                className=
                  "bg-btn-primary text-btn-text rounded-3xl
                  h-10 px-5 py-3
                  hover:bg-transparent hover:ring-2 hover:ring-btn-primary hover:text-secondary"
              >
                線上預約
              </Link>
            </li>
          </ul>
          <button className="md:hidden" onClick={() => setIsMobileNavOpen(true)}>
            <i className="fas fa-ellipsis-v fa-2x text-btn-text"/>
          </button>
        </nav>
      }
      {isMobileNavOpen && <MobileNav onClose={() => setIsMobileNavOpen(false)}/>}
    </React.Fragment>
  );
};

export default Navbar;
