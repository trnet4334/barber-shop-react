import React, {useEffect, useState, useContext} from 'react';
import Sidebar from "../components/blog/Sidebar";
import {Outlet} from "react-router-dom";
import {PostProvider, PostContext} from "../store/postContext";
// import {db} from "../common/firebase";
import { getBlogPosts } from "../common/pageContent";

const Blog = () => {
  // const [posts, setPosts] = useState([])
  //
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const postRef = db.collection("posts")
  //       const posts = await postRef.get()
  //
  //       let allPosts = [];
  //       posts.forEach((post) => {
  //         const data = post.data()
  //         allPosts.push(data)
  //       })
  //
  //       setPosts(allPosts)
  //     } catch (err) {
  //       console.log("error", err)
  //     }
  //   }
  //
  //   fetchPosts()
  // }, [])
  //
  // console.log(posts)
  console.log(getBlogPosts())

  return (
    <PostProvider>
      <section className="w-screen h-auto min-h-screen py-16 px-10 lg:p-20 bg-secondary-light">
        <div className="pt-12">
          <h4 className="text-base font-base text-center text-secondary-dark">Blog & News</h4>
          <h1 className="text-3xl md:text-4xl text-center mb-14">最新文章</h1>
        </div>
        <div className="xl:grid xl:grid-cols-3 gap-6">
          <div className="lg:col-span-2 pb-10 xl:pb-0">
            <Outlet/>
          </div>
          <Sidebar/>
        </div>
      </section>
    </PostProvider>
  )
}

export default Blog
