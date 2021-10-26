import React from "react";

const Work = () => {
    return (
        <div
            className=
                "h-[100vh] w-screen min-h-screen relative overflow-hidden block

                before:bg-work-bg before:bg-fixed
                before:absolute before:inset-0 before:block
                before:w-full before:h-full before:z-[-1] before:brightness-[0.25]"
        >
            <div className="w-full h-2/3 flex flex-col items-center justify-center">
                <h2 className="text-4xl text-btn-text py-10">探索我們的工作</h2>
                <div className="btn-ripple">
                    <i className="fas fa-play"/>
                </div>
            </div>
            <div className="w-full h-1/3 inline-flex">
                <div className="h-full w-1/4 bg-work-img-1 bg-cover"/>
                <div className="h-full w-1/4 bg-work-img-2 bg-cover"/>
                <div className="h-full w-1/4 bg-work-img-3 bg-cover"/>
                <div className="h-full w-1/4 bg-work-img-4 bg-cover"/>
            </div>
        </div>
    )
}

export default Work
