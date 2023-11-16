import React, { useState } from "react";
import '../components/ErrorMessage.css'

function Error({ message }) {
    return (
        <div className="error bg-red-800 p-3 rounded-lg uppercase erorr">
            <span>
                X
            </span>
            <h1 className=" uppercase font-bold">
                {message}
            </h1>
            <span>
                X
            </span>
        </div>
    )
}

export default Error