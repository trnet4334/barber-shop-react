import React from "react";
import {Link} from "react-router-dom";

const Sitemap = () => {
  return (
    <section
      className="min-h-screen bg-secondary-light bg-background-img-2 bg-cover bg-center bg-fixed w-screen pt-48 pb-16 flex flex-col justify-start items-center">
      <div>
        <h4 className="text-base font-base leading-relaxed text-center text-secondary-dark">Sitemap</h4>
        <h2 className="text-3xl md:text-4xl mb-5 md:mb-10 text-center">網頁地圖</h2>
      </div>
      <ul className="list-disclosure-closed text-left text-2xl leading-relaxed">
        <li className="hover:text-secondary-dark">
          <Link to="/">首頁</Link>
        </li>
        <li className="hover:text-secondary-dark">
          <Link to="/about">品牌介紹</Link>
        </li>
        <li className="hover:text-secondary-dark">
          <Link to="/team">團隊</Link>
        </li>
        <li className="hover:text-secondary-dark">
          <Link to="/news">最新消息</Link>
        </li>
        <li className="hover:text-secondary-dark">
          <Link to="/gallery">作品</Link>
        </li>
      </ul>
    </section>
  )
}

export default Sitemap
