import React from 'react';
import Image from "../utilities/Image";
import {useParams} from "react-router-dom";
import {getPost} from "../../common/pageContent";

const SinglePost = () => {
  let params = useParams()
  let post = getPost(parseInt(params.id, 10))

  return (
    <div className="divide-y divide-gray-200">
      <div>
        <div className="mb-6">
          <h4 className="text-sm text-left font-light text-gray-400">{post.author} / {post.date}</h4>
          <h2 className="text-xl text-left text-primary">{post.title}</h2>
        </div>
        <p className="text-left break-all font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolores dolorum ea inventore nam quae reprehenderit, sed similique soluta suscipit? A architecto autem beatae cum deserunt dolores error et excepturi illo impedit, inventore labore odit optio ratione, repudiandae sapiente vel vitae. Harum incidunt laboriosam totam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum illo omnis! Aliquam amet dicta doloribus eaque eius eligendi excepturi exercitationem labore mollitia neque non, nulla porro qui soluta vel velit vero. Ad id illo incidunt officia sint unde voluptatibus?</p>
        <Image
          source={`bg-primary ${post.image}`}
          width='w-full'
          height='h-[325px]'
          backgroundFeature='bg-cover'
          position='my-6'
        />
        <p className="text-left break-all font-light mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque delectus distinctio dolor excepturi fuga harum libero molestias, nemo nostrum possimus qui quis quod ratione repudiandae sed, soluta suscipit totam, vero voluptatem. Aut commodi earum explicabo iure maiores molestias optio porro quia sapiente tempora. Assumenda.</p>
        <p className="text-left break-all font-light mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda deserunt distinctio ea excepturi expedita id, in iusto labore maiores mollitia nam officiis possimus quas quod sed sint tenetur velit!</p>
      </div>
      <div className="w-full flex items-center justify-start pt-5">
        <span className="font-light mr-3">Share:</span>
        <div className="flex">
          <i className="fab fa-facebook fa-2x cursor-pointer pr-1 hover:fill-current hover:text-secondary-dark"/>
          <i className="fab fa-instagram fa-2x cursor-pointer px-1 hover:fill-current hover:text-secondary-dark"/>
          <i className="fab fa-line fa-2x cursor-pointer px-1 hover:fill-current hover:text-secondary-dark"/>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
