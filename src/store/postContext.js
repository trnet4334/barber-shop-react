import React, { useState, useEffect,useCallback } from "react";
import {db} from "../common/firebase";


const PostContext = React.createContext(undefined)

export const PostProvider = (props) => {
  // Store post data in state
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postRef = db.collection("posts")
        const posts = await postRef.get()

        let allPosts = [];
        posts.forEach((post) => {
          const data = post.data()
          allPosts.push(data)
        })

        setPosts(allPosts)
      } catch (err) {
        console.log("error", err)
      }
    }

    fetchPosts()
  }, [])

  return (
    <PostContext.Provider value={posts}>
      {props.children}
    </PostContext.Provider>
  )
}
