import React from "react";
import {Link} from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = () => {
    const scrollPosition = useScrollPosition()

    return (
        <div className="w-screen bg-primary z-20 h-20 flex items-center pr-4 pl-4 font-noto fixed">
            <ul className="flex items-center text-base w-5/12 mx-4 justify-end h-full text-btn-text">
                <li className="mx-5 hover:text-secondary cursor-pointer">
                    <Link to="/about">品牌介紹</Link>
                </li>
                <li className="mx-5 hover:text-secondary cursor-pointer">
                    <Link to="/team">團隊</Link>
                </li>
            </ul>
            <div className="w-1/12 text-btn-text">
                <Link to="/">
                    <span className={scrollPosition === 0 ? 'block text-4xl font-sati' : 'hidden'}>
                        Hooray
                    </span>
                    <div className={scrollPosition > 0 ? 'rounded-[100%] w-14 h-14 ring-2 ring-btn-secondary m-auto' : 'hidden'}>
                        <span className="font-sati text-[2.5rem]">H</span>
                    </div>
                </Link>
            </div>
            <ul className="flex items-center text-base w-5/12 mx-4 h-full text-btn-text">
                <li className="mx-5 hover:text-secondary cursor-pointer">
                    <Link to="/news">最新消息</Link>
                </li>
                <li className="mx-5 hover:text-secondary cursor-pointer">
                    <Link to="/gallery">作品</Link>
                </li>
                <li className="mx-5">
                    <Link to="/reservation" className="bg-btn-primary text-btn-text rounded-3xl h-10 px-5 py-3 hover:bg-transparent hover:ring-2 hover:ring-btn-primary hover:text-secondary">線上預約</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
