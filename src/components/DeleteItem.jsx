import React, { useState } from "react";
import '../components/DeleteItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Delete from "./DeleteFinally.jsx"

function deleteItem({ color, showDeleteItem, deleteItem, FinallyDelete, itemToDelete, permentalyDelete, confirmDelete }) {
    return (
        <>
            {showDeleteItem && (
                <div className="">
                    <h1 className="font-bold text-center uppercase">Basket</h1>
                    <ul className="p-3 card-todo">
                        {deleteItem &&
                            deleteItem.map((itemDelete, index) => (
                                <li
                                    className={`capitalize m-1 w-full items-center flex justify-between py-2 px-4 rounded-md ${!color ? "bg-red-900" : " bg-emerald-900"} border-2`}
                                    key={index}
                                >
                                    {itemDelete}
                                    <span
                                        onClick={() => FinallyDelete(itemDelete)}
                                        className="text-white"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </span>
                                    {itemToDelete === itemDelete && (
                                        <Delete
                                            item={itemToDelete}
                                            onConfirm={() => permentalyDelete(index)}
                                            onCancel={confirmDelete}
                                        />
                                    )}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default deleteItem