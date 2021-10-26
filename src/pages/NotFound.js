import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <section className="w-full h-auto min-h-screen p-24 bg-cover bg-background-img bg-secondary bg-fixed flex flex-col items-center">
            <div className="w-[375px] h-[225px] bg-contain bg-no-repeat bg-404-img mt-16"/>
            <div>
                <h1 className="text-5xl mb-8 text-primary text-center">Oops, 找不到此頁面！</h1>
                <button
                    className="px-12 py-3.5 text-btn-text bg-btn-primary mb-1.5
                    hover:ring-2 hover:ring-btn-primary hover:bg-transparent hover:text-secondary"
                >
                    <Link to="/">回到首頁</Link>
                </button>
                <p className="text-center text-primary cursor-pointer underline hover:text-secondary">或是，瀏覽我們的網頁地圖</p>
            </div>
        </section>
    )
}

export default NotFound
