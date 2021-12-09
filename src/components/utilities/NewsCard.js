import React from 'react';
import Image from "./Image";
import {Link} from "react-router-dom";

const NewsCard = (props) => {
  return (
    <div className="m-auto mt-0 mb-5 md-r:m-auto xl:mx-2.5 xs-max:w-[300px] md-r:w-[335px] w-[375px]">
      <Image
        alternate={props.source.title}
        source={props.source.image}
        width='w-full'
        height='h-[300px]'
        backgroundFeature='bg-cover filter brightness-75 hover:brightness-150'
        position=''
      />
      <h4 className="text-left font-medium text-xl w-[95%] py-4 break-all cursor-pointer hover:text-secondary-dark">
        <Link className="no-underline" to={`/news/${props.source.postId}`}>{props.source.title}</Link>
      </h4>
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
