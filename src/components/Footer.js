import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full h-80 bg-primary flex flex-col justify-between">
            <div className="w-full h-auto flex items-center justify-center relative py-2 px-7 font-noto">
                <div className="flex flex-col justify-between text-btn-text text-base w-1/4 py-4">
                    <div className="flex flex-col items-start mb-5">
                        <span className="font-sati text-5xl cursor-pointer">Hooray</span>
                        <div className="flex mt-5">
                            <i className="fab fa-facebook fa-2x cursor-pointer pr-1 hover:fill-current hover:text-secondary hover:transform hover:-translate-y-1.5"/>
                            <i className="fab fa-instagram fa-2x cursor-pointer px-1 hover:fill-current hover:text-secondary hover:transform hover:-translate-y-1.5"/>
                            <i className="fab fa-line fa-2x cursor-pointer px-1 hover:fill-current hover:text-secondary hover:transform hover:-translate-y-1.5"/>
                        </div>
                    </div>
                    <ul className="flex flex-col items-start mt-2 leading-relaxed font-light">
                        <li className="inline-block">
                            <i className="fas fa-phone-square-alt mr-2"/>
                            <span>02-22200000</span>
                        </li>
                        <li className="inline-block">
                            <i className="fas fa-map-pin mr-2"/>
                            <span>台北市中山路四段999巷3號6樓</span>
                        </li>
                    </ul>
                </div>
                <div className="text-btn-text w-2/5">
                    <ul className="flex justify-around w-2/3 mb-12 m-auto text-left text-xl list-none inline-block font-light">
                        <li className="cursor-pointer">品牌介紹</li>
                        <li className="cursor-pointer">最新消息</li>
                        <li className="cursor-pointer">團隊</li>
                        <li className="cursor-pointer">作品</li>
                        <li className="cursor-pointer">聯絡我們</li>
                    </ul>
                    <div className="inline-block m-auto bg-secondary rounded-full pl-4">
                        <input
                            id="subscriptions"
                            name="subscriptions"
                            type="email"
                            placeholder="Email Address"
                            className="border-0 bg-transparent focus:outline-none text-black w-72"
                        />
                        <button
                            className="bg-btn-primary py-2.5 px-3 rounded-tr-full rounded-br-full"
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto flex items-center justify-center border-t border-gray-600">
                <span className="text-center text-btn-text py-3  font-thin">Copyright © 2021 HOORAY, All right reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
