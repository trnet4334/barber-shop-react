import React, { useState, useEffect } from "react";
import NewsCard from "../utilities/NewsCard";
import {blogPosts} from "../../common/pageContent";

const News = () => {
    const [ posts, setPosts ] = useState([])
    useEffect(() => {
        setPosts([...blogPosts.slice(0, 4)])
    }, [])

    return (
        <div className="bg-secondary bg-background-img-2 bg-center bg-cover w-screen h-auto pt-24 pb-16 text-primary">
            <h2 className="font-base text-3xl md:text-4xl pt-6 pb-16">最新文章 & 優惠訊息</h2>
            <div className="w-full h-auto flex flex-col flex-wrap md:flex-row justify-center md:items-start">
                {
                    posts.map((item) =>
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
