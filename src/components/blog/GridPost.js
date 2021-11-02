import React, { useState, useEffect } from 'react';
import NewsCard from "../utilities/NewsCard";
import {blogPosts} from "../../common/pageContent";

const GridPost = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setPosts([...blogPosts])
    }, [])

    return (
        <div className="grid md:grid-cols-2 gap-x-0 gap-y-10">
            {
                posts.map((item) =>
                    <NewsCard
                        source={item}
                        key={item.postId}
                    />
                )
            }
        </div>
    )
}

export default GridPost
