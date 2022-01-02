import React from "react";

const Toast = (props) => {
  return (
    <div
      className={`${props.color} fixed z-50 bottom-1 left-1/2 -translate-x-1/2 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3`}
      role="alert"
    >
      <div
        className="bg-green-500 flex justify-end items-center px-3 rounded-t-lg">
        <button
          className="box-content h-3 w-3 text-lg text-white block border-none rounded-none opacity-50
                     focus:shadow-none focus:outline-none focus:opacity-100
                     hover:text-white hover:opacity-75 hover:no-underline"
          onClick={props.onClose}>
          <i className="fas fa-times"/>
        </button>
      </div>
      {props.content}
    </div>
  )
}

export default Toast
