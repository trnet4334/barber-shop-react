import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <section className="w-full h-auto min-h-screen pt-24 px-8 pb-16 xs:p-24 bg-cover bg-background-img bg-secondary bg-fixed flex flex-col items-center">
            <div className="xs-max:w-[275px] xs-max:h-[150px] w-[375px] h-[225px] bg-contain bg-no-repeat bg-404-img mt-16"/>
            <div>
                <h1 className="xs-max:text-2xl xs-r:text-3xl sm-r:text-4xl text-5xl mb-8 text-primary text-center">Oops, 找不到此頁面！</h1>
                <button
                    className="mb-1.5 hover:bg-transparent btn-lg"
                >
                    <Link to="/">回到首頁</Link>
                </button>
                <p className="text-center text-primary cursor-pointer underline hover:text-secondary">
                    <Link to="/sitemap">或是，瀏覽我們的網頁地圖</Link>
                </p>
            </div>
        </section>
    )
}

export default NotFound
