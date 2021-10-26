import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
                <div>
                    <span
                        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600">
                        Task in progress
                    </span>
                </div>
                <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-purple-600">
                        30%
                    </span>
                </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                <div className="w-[30%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"/>
            </div>
        </div>
    )
}

export default ProgressBar
