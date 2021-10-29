import React, { useState, useEffect } from "react";
import NewsCard from "../utilities/NewsCard";
import {blogPosts} from "../../common/pageContent";

const News = () => {
    const [ posts, setPosts ] = useState([])
    useEffect(() => {
        setPosts([...blogPosts.slice(0, 3)])
    }, [])

    return (
        <div className="bg-secondary bg-background-img-2 bg-center bg-cover w-screen h-auto min-h-screen pt-24 pb-44 text-primary">
            <h2 className="font-base text-4xl pt-6 pb-16">最新文章 & 優惠訊息</h2>
            <div className="w-full h-auto flex justify-center">
                {
                    posts.slice(0, 3).map((item) =>
                        <NewsCard
                            source={item}
                            key={item.postId}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default News
