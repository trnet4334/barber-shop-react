import React from 'react';

const Gallery = () => {
    return (
        <section className="w-screen h-auto min-h-screen bg-secondary bg-background-img-2 bg-cover pt-24 px-12 text-primary">
            <div className="pt-8">
                <h4 className="text-base font-base text-center text-secondary">Gallery</h4>
                <h1 className="text-center text-3xl md:text-4xl">作品集</h1>
            </div>
            <div className="w-full h-auto pb-16 pt-10 px-8 xs-max:px-0 xs-r:px-0 md:p-16 flex items-center justify-center">
                <div className="flex flex-wrap w-[71vw] h-auto justify-between">
                    <div className="bg-gallery-img-1 gallery-bg w-[23vw] h-[25vw]"/>
                    <div className="bg-gallery-img-2 gallery-bg w-[23vw] h-[25vw]"/>
                    <div className="bg-gallery-img-3 gallery-bg w-[23vw] h-[25vw]"/>
                    <div className="bg-gallery-img-4 gallery-bg w-[47vw] h-[25vw] mt-3"/>
                    <div className="bg-gallery-img-5 gallery-bg w-[23vw] h-[25vw] mt-3"/>
                    <div className="bg-gallery-img-6 gallery-bg w-[23vw] h-[25vw] mt-3"/>
                    <div className="bg-gallery-img-7 gallery-bg w-[47vw] h-[25vw] mt-3"/>
                    <div className="bg-gallery-img-8 gallery-bg w-[23vw] h-[25vw] mt-3"/>
                    <div className="bg-gallery-img-9 gallery-bg w-[23vw] h-[25vw] mt-3"/>
                    <div className="bg-gallery-img-10 gallery-bg w-[23vw] h-[25vw] mt-3"/>
                </div>
            </div>
        </section>
    )
}

export default Gallery
