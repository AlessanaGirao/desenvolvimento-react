import React from "react";

function Button({ children }){
    return (
        <button className="bg-gray-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded ring-2 ring-purple-500/50">
            {children}
        </button>
    )
}

export default Button;