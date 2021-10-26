import React from "react";

const MemberCard = (props) => {
    const size = props.size
    const memberName = props.name
    const memberImage = props.image

    return (
        <div className={ size === 'lg' ? 'w-1/4 h-[500px] mx-2.5' : 'w-[325px] h-[400px] mx-2.5 my-3.5' }>
            <div className="flex relative w-full h-full">
                <div role="img" alt={memberName} className={`absolute inset-0 w-full h-full bg-cover bg-center ${memberImage}`}/>
                <div
                    className=
                        "relative z-10 w-full h-full flex flex-col justify-center items-center
                        bg-black bg-opacity-70
                        opacity-0 hover:opacity-95"
                >
                    <h2 className="tracking-tight text-3xl text-btn-text font-light mb-1">
                        {memberName}
                    </h2>
                    <h1 className="text-xl font-light text-secondary mb-3">barber</h1>
                    <ul className="flex mt-3">
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-facebook fa-2x cursor-pointer pr-2 text-btn-text hover:fill-current hover:text-secondary hover:animate-bounce"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-instagram fa-2x cursor-pointer px-2 text-btn-text hover:fill-current hover:text-secondary hover:animate-bounce"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://linecorp.com/en/" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-line fa-2x cursor-pointer px-2 text-btn-text hover:fill-current hover:text-secondary hover:animate-bounce"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MemberCard
