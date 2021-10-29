import React from "react";

const Modal = (props) => {
    return (
        <React.Fragment>
            <div
                className=
                    {`${props.isOpened ? 'overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none flex justify-center items-center focus:outline-none justify-center items-center' : 'hidden'}`}
            >
                <div className="relative w-auto mx-auto max-w-xl min-w-[35vw]">
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none">
                        <div
                            className="flex items-start justify-start p-5 border-b border-solid border-gray-200 rounded-t">
                            {props.title}
                        </div>
                        {props.content}
                        {props.result}
                        <div className="flex items-center justify-end py-3 px-6 border-t border-solid border-gray-200 rounded-b">
                            {props.buttons}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${props.isOpened ? 'opacity-80 fixed inset-0 z-40 bg-black' : 'hidden'}`}/>
        </React.Fragment>
    )
}

export default Modal
