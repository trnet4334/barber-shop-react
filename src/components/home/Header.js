import React from "react";
import {Link} from "react-router-dom";
import Image from "../utilities/Image";

const Header = () => {
  return (
    <header className="relative w-screen bg-secondary-light bg-background-img-2 bg-cover flex h-auto min-h-screen">
      <div
        className=
          "h-auto min-h-[500px] md:min-h-[750px] w-full xl:w-1/2 text-secondary-mild pt-40 px-10 xl:px-24 relative block overflow-hidden z-0
           before:bg-header-main before:bg-cover before:absolute before:inset-0 before:block
           before:w-full before:h-full before:z-[-1] before:brightness-50"
      >
        <h2 className="text-3xl xs-r:text-4xl sm:text-5xl font-semibold font-sati text-left mb-10">Welcome to
          Hooray</h2>
        <p className="text-left leading-relaxed mb-12 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Accusamus atque blanditiis laudantium nihil numquam pariatur perspiciatis quam quibusdam, ullam ut?</p>
        <div className="flex items-start">
          <button className="btn-lg mr-8 hover:bg-black hover:bg-opacity-50">
            <Link to="/about">閱讀更多</Link>
          </button>
          <div className="btn-ripple">
            <i className="fas fa-play"/>
          </div>
        </div>
      </div>
      <div
        className="h-[140vh] xs-max:hidden xs-r:hidden sm-r:hidden xl:w-1/2 flex flex-col pb-16 justify-end items-center">
        <Image
          alternate='Header image 1'
          source='bg-header-img-1'
          width='md-r:w-[375px] lg-r:w-[450px] xl:w-[550px]'
          height='md-r:h-[275px] lg-r:h-[350px] xl:h-[400px]'
          backgroundFeature='bg-cover'
          position='-translate-y-20'
        />
        <div className="w-full h-52 bg-primary -left-3.5 transform -translate-x-48 flex">
          <div className="w-full lg:w-3/5 h-full px-8 py-6 font-light text-secondary-mild">
            <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti est
              laudantium quas quibusdam quis sed ut? Fugit?</p>
            <p className="text-left underline mt-6 cursor-pointer pb-3 hover:text-secondary-dark">
              <Link to="/reservation">
                開始預約
              </Link>
            </p>
          </div>
          <Image
            alternate='Banner'
            source='bg-header-banner'
            width='w-0 lg:w-2/5'
            height='h-full'
            backgroundFeature='bg-cover'
            position='right-0 z-10'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
