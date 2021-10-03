import React, {useRef, useEffect} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    const logoRef = useRef()

    return (
        <div className="w-screen bg-primary z-10 h-20 flex items-center pr-4 pl-4 font-noto fixed">
            <ul className="flex items-center text-base w-5/12 mx-4 justify-end h-full text-btn-text">
                <li className="mx-5 hover:text-secondary cursor-pointer">品牌介紹</li>
                <li className="mx-5 hover:text-secondary cursor-pointer">團隊</li>
            </ul>
            <div className="w-1/12 text-btn-text">
                <Link to="/">
                    {/*<span*/}
                    {/*    className="text-4xl font-sati"*/}
                    {/*    ref={logoRef}*/}
                    {/*>*/}
                    {/*    Hooray*/}
                    {/*</span>*/}
                    <div className="rounded-[100%] w-14 h-14 ring-2 ring-btn-secondary m-auto">
                        <span className="font-sati text-[2.5rem]">H</span>
                    </div>
                </Link>
            </div>
            <ul className="flex items-center text-base w-5/12 mx-4 h-full text-btn-text">
                <li className="mx-5 hover:text-secondary cursor-pointer">部落格</li>
                <li className="mx-5 hover:text-secondary cursor-pointer">作品</li>
                <li className="mx-5">
                    <Link to="/reservation" className="bg-btn-primary text-btn-text rounded-3xl h-10 px-5 py-3 hover:bg-transparent hover:ring-2 hover:ring-btn-primary hover:text-secondary">線上預約</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
