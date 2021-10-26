import React from "react";
import NewsCard from "../utilities/NewsCard";

const News = () => {
    const blogPost = [
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', author: 'Ryan Chen', date: '06.12.2021', image: 'bg-news-img-1', postId: '001' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', author: 'Kelly Wu', date: '05.14.2021', image: 'bg-news-img-2', postId: '002'  },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', author: 'Cindy Wang', date: '04.10.2021', image: 'bg-news-img-3', postId: '003' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', author: 'Cindy Wang', date: '03.03.2021', image: 'bg-news-img-1', postId: '004' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', author: 'Tiffany Chiu', date: '02.22.2021', image: 'bg-news-img-2', postId: '005' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', author: 'Ryan Chen', date: '01.08.2021', image: 'bg-news-img-3', postId: '006' },
    ]
    const posts = blogPost.splice(0, 3).map((item) =>
        <NewsCard
            source={item}
            key={item.postId}
        />
    )

    return (
        <div className="bg-secondary w-screen h-auto min-h-screen pt-24 pb-44 text-primary">
            <h2 className="font-base text-4xl pt-6 pb-16">最新文章 & 優惠訊息</h2>
            <div className="w-full h-auto flex justify-center">
                {posts}
            </div>
        </div>
    )
}

export default News
