import React from 'react';
import Sidebar from "../components/blog/Sidebar";
import GridPost from "../components/blog/GridPost";
import SinglePost from "../components/blog/SinglePost";

const Blog = () => {

    return (
        <section className="w-screen h-auto min-h-screen py-20 px-20 bg-secondary">
            <div className="grid grid-cols-3 gap-6 pt-12">
                <div className="col-span-2">
                    <GridPost/>
                    {/*<SinglePost/>*/}
                </div>
                <Sidebar/>
            </div>
        </section>
    )
}

export default Blog
