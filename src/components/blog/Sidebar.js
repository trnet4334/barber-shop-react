import React, {useState, useEffect} from 'react';
import {blogPosts} from "../../common/pageContent";
import {Link} from "react-router-dom";
import {scrollTop} from "../../common/pageScroll";

const Sidebar = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    setPosts([...blogPosts.slice(0, 4)])
  }, [])

  return (
    <div className="w-full h-full hidden xl:block">
      <div className="w-full h-auto p-10 divide-y divide-secondary-dark bg-primary text-secondary-mild">
        <h2 className="text-2xl pb-5">最新文章</h2>
        <div className="w-full">
          <div className="mt-8">
            {posts.map((item) =>
              <div
                className="h-[75px] w-full mt-3 flex bg-secondary-dark text-base items-center justify-start py-0.5 px-3.5 cursor-pointer overflow-hidden hover:text-lg"
                key={item.postId}
              >
                <i className="fas fa-angle-right fa-2x text-secondary-mild"/>
                <p className="text-secondary-mild font-light break-all text-left ml-2">
                  <Link
                    className="no-underline"
                    onClick={scrollTop}
                    to={`/news/${item.postId}`}
                  >
                    {item.title}
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-auto p-10 divide-y divide-secondary-dark bg-primary text-secondary-mild mt-6">
        <h2 className="text-2xl pb-5">作品</h2>
        <div className="w-full h-auto flex flex-wrap items-center justify-center pt-8">
          <div
            className="bg-gallery-img-1 bg-cover bg-top brightness-[0.45] filter hover:brightness-110 w-[125px] h-[125px] lg:w-[150px] lg:h-[150px]"/>
          <div
            className="bg-gallery-img-2 bg-cover bg-top brightness-[0.45] filter hover:brightness-110 w-[125px] h-[125px] lg:w-[150px] lg:h-[150px]"/>
          <div
            className="bg-gallery-img-3 bg-cover bg-top brightness-[0.45] filter hover:brightness-110 w-[125px] h-[125px] lg:w-[150px] lg:h-[150px]"/>
          <div
            className="bg-gallery-img-5 bg-cover bg-top brightness-[0.45] filter hover:brightness-110 w-[125px] h-[125px] lg:w-[150px] lg:h-[150px]"/>
        </div>
        <button className="btn-lg hover:bg-transparent mt-5">
          <Link to="/gallery" className="no-underline" onClick={scrollTop}>更多作品</Link>
        </button>
      </div>
      <div className="w-full h-auto p-10 divide-y divide-secondary-dark bg-primary text-secondary-mild mt-6">
        <h2 className="text-2xl pb-5">Follow us</h2>
        <div className="w-full flex items-start pt-8">
          <i
            className=
              "fab fa-facebook fa-2x cursor-pointer mr-3
              hover:fill-current hover:text-secondary-dark hover:transform hover:-translate-y-1.5"
          />
          <i
            className=
              "fab fa-instagram fa-2x cursor-pointer mx-1
              hover:fill-current hover:text-secondary-dark hover:transform hover:-translate-y-1.5"
          />
          <i
            className=
              "fab fa-line fa-2x cursor-pointer mx-3
              hover:fill-current hover:text-secondary-dark hover:transform hover:-translate-y-1.5"
          />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
