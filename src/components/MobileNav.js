import React from "react";
import {Link} from "react-router-dom";

const MobileNav = (props) => {
  return (
    <nav
      className="w-screen h-screen max-h-screen bg-primary md:hidden z-50 pt-[150px] flex flex-col justify-center items-center overflow-y-scroll">
      <i
        className="far fa-times-circle fa-3x text-secondary-mild cursor-pointer mb-10"
        onClick={props.onClose}
      />
      <ul className="text-secondary-mild leading-relaxed text-2xl w-full h-full">
        <li className="my-1.5 hover:text-secondary-dark cursor-pointer">
          <Link to="/about" onClick={props.onClose}>品牌介紹</Link>
        </li>
        <li className="my-1.5 hover:text-secondary-dark cursor-pointer">
          <Link to="/team" onClick={props.onClose}>團隊</Link>
        </li>
        <li className="my-1.5 hover:text-secondary-dark cursor-pointer">
          <Link to="/news" onClick={props.onClose}>最新消息</Link>
        </li>
        <li className="my-1.5 hover:text-secondary-dark cursor-pointer">
          <Link to="/gallery" onClick={props.onClose}>作品</Link>
        </li>
        <li className="my-5">
          <Link
            to="/reservation"
            className="bg-secondary-dark text-secondary-mild rounded-xl h-8 px-5 py-1.5 hover:bg-transparent hover:ring-2 hover:ring-secondary-dark hover:text-secondary-dark"
            onClick={props.onClose}
          >
            線上預約
          </Link>
        </li>
      </ul>
      <span className="absolute top-6 left-6 text-secondary-mild text-4xl font-sati">
        Hooray
      </span>
    </nav>
  )
}

export default MobileNav
