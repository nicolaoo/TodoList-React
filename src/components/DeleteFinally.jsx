import React from "react";
import './DeleteFinally.css'

function DeleteFinally({ item, onConfirm, onCancel }) {
    return (
        <div className="delete bg-red-800 p-3 rounded-lg uppercase">
            <h1 className=" uppercase font-bold">
                Vuoi eliminare definitivamente {item}?
            </h1>
            <button onClick={onConfirm}>
                ok
            </button>
            <button onClick={onCancel}>
                Annulla
            </button>
        </div>
    )
}

export default DeleteFinally