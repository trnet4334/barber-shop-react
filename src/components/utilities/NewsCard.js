import React from 'react';

const NewsCard = (props) => {
    return (
        <div className="m-auto mt-0 mb-8 xl:mx-2.5 w-[375px]">
            <div
                role="img"
                alt={props.source.title}
                className={`w-full h-[300px] ${props.source.image} bg-cover cursor-pointer filter brightness-75 hover:brightness-150`}
            />
            <h4 className="text-left font-medium text-xl w-[95%] py-4 break-all cursor-pointer hover:text-secondary">{props.source.title}</h4>
            <div className="flex justify-around font-light w-full">
                <div className="flex items-center">
                    <i className="fas fa-user-circle mr-1"/>
                    <p>{props.source.author}</p>
                </div>
                <div className="flex items-center">
                    <i className="fas fa-calendar-day mr-1"/>
                    <p className="mr-8">{props.source.date}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
