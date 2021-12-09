import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-secondary-mild">
            {props.name}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-secondary-mild">
            {props.value}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-secondary-light">
        <div
          className={`${props.width} shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-dark`}/>
      </div>
    </div>
  )
}

export default ProgressBar
