import React from 'react';
import Sidebar from "../components/blog/Sidebar";
import {Outlet} from "react-router-dom";

const Blog = () => {

  return (
    <section className="w-screen h-auto min-h-screen py-16 px-10 lg:p-20 bg-secondary">
      <div className="pt-12">
        <h4 className="text-base font-base text-center text-secondary">Blog & News</h4>
        <h1 className="text-3xl md:text-4xl text-center mb-14">最新文章</h1>
      </div>
      <div className="xl:grid xl:grid-cols-3 gap-6">
        <div className="lg:col-span-2 pb-10 xl:pb-0">
          <Outlet/>
        </div>
        <Sidebar/>
      </div>
    </section>
  )
}

export default Blog
