import React from "react";
import './DeleteFinally.css'

function DeleteFinally({ item, onConfirm, onCancel }) {
    return (
        <div className="delete bg-amber-50 p-3 rounded-lg uppercase">
            <h1 className="text-red-700 text-lg font-extrabold uppercase">
                Vuoi eliminare definitivamente <span className=" font-extrabold">
                    {item}
                </span>
                ?
            </h1>
            <div className="flex justify-around">
                <button className="
                text-green-600 
                uppercase 
                font-bold 
                py-2 px-5  
                border-green-600 
                border-2 
                rounded-md 
                hover:bg-green-700
                hover:text-white"

                    onClick={onConfirm}
                >
                    ok
                </button>

                <button className="
                text-blue-600 
                uppercase 
                font-bold 
                py-2 px-3 
                border-blue-600 
                border-2 
                rounded-md
                hover:bg-blue-700
                hover:text-white"

                    onClick={onCancel}
                >
                    Annulla
                </button>
            </div>
        </div>
    )
}

export default DeleteFinally