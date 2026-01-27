import React from 'react'

function Button({data}){
    return(
        <button className="bg-gray-500 hover:bg-gray-300 text-white font-bold rounded-full w-35 h-10 ">
    {data}
    </button>
    )
}
export default Button