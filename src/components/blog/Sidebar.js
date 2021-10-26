import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-auto p-10 divide-y divide-secondary bg-primary text-btn-text">
                <h2 className="text-2xl pb-5">最新文章</h2>
                <div className="w-full">
                    <div className="mt-8">
                        {[1, 2, 3].map(() =>
                            <div className="h-[75px] w-full bg-btn-primary mt-3 flex items-center justify-center py-0.5 px-3.5">
                                <i className="fas fa-angle-right fa-2x text-btn-text"/>
                                <p className="text-btn-text font-light break-all text-sm text-left ml-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quisquam rem reprehenderit?</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full h-auto p-10 divide-y divide-secondary bg-primary text-btn-text mt-6">
                <h2 className="text-2xl pb-5">作品</h2>
                <div className="w-full h-auto flex flex-wrap items-center justify-center pt-8">
                    <div className="bg-gallery-img-1 bg-cover bg-top brightness-[0.45] filter hover:brightness-110 w-[150px] h-[150px]"></div>
                    <div className="bg-gallery-img-2 bg-cover bg-top brightness-[0.45] filter hover:brightness-110 w-[150px] h-[150px]"></div>
                    <div className="bg-gallery-img-3 bg-cover bg-top brightness-[0.45] filter hover:brightness-110 w-[150px] h-[150px]"></div>
                    <div className="bg-gallery-img-5 bg-cover bg-top brightness-[0.45] filter hover:brightness-110 w-[150px] h-[150px]"></div>
                </div>
            </div>
            <div className="w-full h-auto p-10 divide-y divide-secondary bg-primary text-btn-text mt-6">
                <h2 className="text-2xl pb-5">Follow us</h2>
                <div className="w-full flex items-start pt-8">
                    <i
                        className=
                            "fab fa-facebook fa-2x cursor-pointer mr-3
                            hover:fill-current hover:text-secondary hover:transform hover:-translate-y-1.5"
                    />
                    <i
                        className=
                            "fab fa-instagram fa-2x cursor-pointer mx-1
                            hover:fill-current hover:text-secondary hover:transform hover:-translate-y-1.5"
                    />
                    <i
                        className=
                            "fab fa-line fa-2x cursor-pointer mx-3
                            hover:fill-current hover:text-secondary hover:transform hover:-translate-y-1.5"
                    />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
