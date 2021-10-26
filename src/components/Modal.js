import React from "react";

const Modal = (props) => {
    return (
        <React.Fragment>
            {/* Add hidden */}
            <div
                className=
                    "overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none
                    flex justify-center items-center hidden
                    focus:outline-none justify-center items-center"
            >
                <div className="relative w-auto mx-auto max-w-xl min-w-[35vw]">
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none">
                        <div
                            className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                            {props.title}
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-gray-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick="toggleModal('modal-example-regular')">
                                <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    <i className="fas fa-times"/>
                                </span>
                            </button>
                        </div>
                        {props.content}
                        {props.result}
                        <div className="flex items-center justify-end py-3 px-6 border-t border-solid border-gray-200 rounded-b">
                            {props.buttons}
                        </div>
                    </div>
                </div>
            </div>
            {/* Add hidden */}
            <div className="opacity-80 fixed inset-0 z-40 bg-black hidden"/>
        </React.Fragment>
    )
}

export default Modal
