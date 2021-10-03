import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="relative w-screen bg-secondary bg-background-img-2 bg-cover flex h-auto min-h-screen">
      <div className=
               "h-[140vh] w-1/2 text-btn-text pt-48 px-24 relative block overflow-hidden z-0

               before:bg-header-main before:bg-cover before:absolute before:inset-0 before:block
               before:w-full before:h-full before:z-[-1] before:brightness-50"
      >
        <h2 className="text-5xl font-semibold font-sati text-left mb-10">Welcome to Hooray</h2>
        <p className="text-left leading-relaxed mb-12 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque blanditiis laudantium nihil numquam pariatur perspiciatis quam quibusdam, ullam ut?</p>
        <div className="flex items-start">
          <button className="px-12 py-3.5 text-btn-text bg-btn-primary hover:ring-2 hover:ring-btn-primary hover:bg-transparent mr-8">閱讀更多</button>
          <div
              className=
                  "w-16 h-16 rounded-full bg-secondary text-secondary flex items-center justify-center
                  hover:bg-btn-primary hover:text-btn-text cursor-pointer
                  animate-ripple transition duration-700 ease-linear">
            <i className="fas fa-play"/>
          </div>
        </div>
      </div>
      <div className="h-[140vh] w-1/2 flex flex-col pb-16 justify-end items-center">
        <div className="w-[550px] h-[425px] bg-header-img-1 bg-cover -translate-y-14"/>
        <div className="w-full h-56 bg-primary -left-3.5 transform -translate-x-48 flex">
          <div className="w-3/5 h-full px-8 py-6 font-light text-btn-text">
              <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti est laudantium quas quibusdam quis sed ut? Fugit?</p>
              <p className="text-left underline mt-6 cursor-pointer pb-3 hover:text-secondary">
                  <Link to="/reservation">
                      開始預約
                  </Link>
              </p>
          </div>
          <div className="w-2/5 h-full bg-header-banner bg-cover right-0 z-10"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
