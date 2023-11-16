import React, { useState } from "react";
import '../components/ErrorMessage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

function Error({ message }) {
    return (
        <div className="error text-lg font-extrabold text-red-700 bg-amber-50 p-3 rounded-lg uppercase erorr">
            <span>
                <FontAwesomeIcon icon={faTriangleExclamation} />
            </span>
            <h1 className=" uppercase ">
                {message}
            </h1>
            <span>
                <FontAwesomeIcon icon={faTriangleExclamation} />
            </span>
        </div>
    )
}

export default Error