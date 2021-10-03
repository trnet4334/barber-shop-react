import React from "react";

const News = () => {
    const post = {
        'image': '',
        'title': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'date': 'August 5, 2021',
        'numOfComments': 0
    }
    const posts = [1, 2, 3].map(() =>
        <div className="mx-2.5 w-[380px]">
            <div className="w-[380px] h-[320px] bg-news-img-1 bg-cover cursor-pointer filter brightness-75 hover:brightness-150"/>
            <h4 className="text-left font-medium text-xl w-[95%] py-4 break-all cursor-pointer hover:text-secondary">{post.title}</h4>
            <div className="flex items-center font-light">
                <i className="fas fa-calendar-day mr-1"/>
                <p className="mr-8">{post.date}</p>
                <p className="hover:text-secondary cursor-pointer">{post.numOfComments} Comments</p>
            </div>
        </div>
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
