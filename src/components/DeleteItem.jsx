import React, { useState } from "react";
import '../components/DeleteItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Delete from "./DeleteFinally.jsx"

function deleteItem({ showDeleteItem, deleteItem, FinallyDelete, itemToDelete, permentalyDelete, confirmDelete }) {
    return (
        <>
            {showDeleteItem && (
                <div className="">
                    <h1 className="font-bold text-center uppercase">Cestino</h1>
                    <ul className="p-3 card-todo">
                        {deleteItem &&
                            deleteItem.map((itemDelete, index) => (
                                <li
                                    className={`m-1 w-full items-center flex justify-between py-2 px-4 rounded-md bg-red-900 border-2`}
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