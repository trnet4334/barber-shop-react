import React from 'react';
import NewsCard from "../utilities/NewsCard";

const GridPost = () => {
    const blogPost = [
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', author: 'Ryan Chen', date: '06.12.2021', image: 'bg-news-img-1', postId: '001' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', author: 'Kelly Wu', date: '05.14.2021', image: 'bg-news-img-2', postId: '002'  },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', author: 'Cindy Wang', date: '04.10.2021', image: 'bg-news-img-3', postId: '003' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', author: 'Cindy Wang', date: '03.03.2021', image: 'bg-news-img-4', postId: '004' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', author: 'Tiffany Chiu', date: '02.22.2021', image: 'bg-news-img-5', postId: '005' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', author: 'Ryan Chen', date: '01.08.2021', image: 'bg-news-img-6', postId: '006' },
    ]
    const posts = blogPost.map((item) =>
        <NewsCard
            source={item}
            key={item.postId}
        />
    )

    return (
        <div className="grid grid-cols-2 gap-x-0 gap-y-10 place-content-center">
            {posts}
        </div>
    )
}

export default GridPost
