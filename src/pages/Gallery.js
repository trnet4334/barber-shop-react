import React from 'react';
import Image from "../components/utilities/Image";

const Gallery = () => {
  return (
    <section
      className="w-screen h-auto min-h-screen bg-secondary-light bg-background-img-2 bg-cover pt-24 px-12 text-primary">
      <div className="pt-8">
        <h4 className="text-base font-base text-center text-secondary-dark">Gallery</h4>
        <h1 className="text-center text-3xl md:text-4xl">作品集</h1>
      </div>
      <div className="w-full h-auto pb-16 pt-10 px-8 xs-max:px-0 xs-r:px-0 md:p-16 flex items-center justify-center">
        <div className="flex flex-wrap w-[71vw] h-auto justify-between">
          <Image
            alternate='Gallery Image 1'
            source='bg-gallery-img-1'
            width='w-[23vw]'
            height='h-[25vw]'
            backgroundFeature='gallery-bg'
            position=''
          />
          <Image
            alternate='Gallery Image 2'
            source='bg-gallery-img-2'
            width='w-[23vw]'
            height='h-[25vw]'
            backgroundFeature='gallery-bg'
            position=''
          />
          <Image
            alternate='Gallery Image 3'
            source='bg-gallery-img-3'
            width='w-[23vw]'
            height='h-[25vw]'
            backgroundFeature='gallery-bg'
            position=''
          />
          <Image
            alternate='Gallery Image 4'
            source='bg-gallery-img-4'
            width='w-[47vw]'
            height='h-[25vw]'
            backgroundFeature='gallery-bg'
            position='mt-3'
          />
          <Image
            alternate='Gallery Image 5'
            source='bg-gallery-img-5'
            width='w-[23vw]'
            height='h-[25vw]'
            backgroundFeature='gallery-bg'
            position='mt-3'
          />
          <Image
            alternate='Gallery Image 6'
            source='bg-gallery-img-6'
            width='w-[23vw]'
            height='h-[25vw]'
            backgroundFeature='gallery-bg'
            position='mt-3'
          />
          <Image
            alternate='Gallery Image 7'
            source='bg-gallery-img-7'
            width='w-[47vw]'
            height='h-[25vw]'
            backgroundFeature='gallery-bg'
            position='mt-3'
          />
          <Image
            alternate='Gallery Image 8'
            source='bg-gallery-img-8'
            width='w-[23vw]'
            height='h-[25vw]'
            backgroundFeature='gallery-bg'
            position='mt-3'
          />
          <Image
            alternate='Gallery Image 9'
            source='bg-gallery-img-9'
            width='w-[23vw]'
            height='h-[25vw]'
            backgroundFeature='gallery-bg'
            position='mt-3'
          />
          <Image
            alternate='Gallery Image 10'
            source='bg-gallery-img-10'
            width='w-[23vw]'
            height='h-[25vw]'
            backgroundFeature='gallery-bg'
            position='mt-3'
          />
        </div>
      </div>
    </section>
  )
}

export default Gallery
