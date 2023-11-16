import React, { useState } from "react";
import '../components/ListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Error from "./ErrorMessage.jsx";
import Delete from "./DeleteFinally.jsx"

function ItemList() {

    const [showDeleteItem, setShowDeleteItem] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [todoList, setTodoList] = useState([]); // Inizializza lo stato dell'elenco delle attività
    const [deleteItem, setDeleteItem] = useState([]);
    const [error, setError] = useState('');
    const [itemToDelete, setItemToDelete] = useState(null);

    const FinallyDelete = (value) => {
        setItemToDelete(value);
        setShowDeleteItem(true);
    }

    const permentalyDelete = (value) => {
        const upperToDoList = [...deleteItem];

        // Implementa la logica per l'eliminazione definitiva dell'elemento
        upperToDoList.splice(value, 1);

        setDeleteItem(upperToDoList)

        console.log(`Elemento ${itemToDelete} eliminato definitivamente.`);
        if (deleteItem.length <= 2) {
            // Chiudi il modulo di conferma
            setShowDeleteItem(false);
            setItemToDelete(null);
        } else {
            // Chiudi il modulo di conferma
            setShowDeleteItem(true);
            setItemToDelete(null);
        }
    }

    const confirmDelete = () => {
        // Chiudi il modulo di conferma senza eliminare definitivamente l'elemento
        setShowDeleteItem(false);
        setItemToDelete(null);
    }

    // const [isDone, setIsDone] = useState(false);
    // const [itemDone, setItemDone] = useState([]);

    const handleInputChange = (e) => {
        setUserInput(e.target.value); // Aggiorna lo stato con il valore dell'input
        setError('')
    };

    const handleButtonClick = () => {
        if (userInput.trim() === '' || userInput.length === 0) {
            setError('Inserisci una parola valida');
        } else if (todoList.includes(userInput)) {
            setError(`La TODO ${userInput} c'è già inserscine un'altra`);
        } else {
            setTodoList([...todoList, userInput]);
            setUserInput('');
            setError('');
        }
    };


    const deleteInput = (value) => {
        // Copia l'array todoList per non modificarlo direttamente
        const updatedTodoList = [...todoList];

        // Rimuovi l'elemento dalla copia
        updatedTodoList.splice(value, 1);

        // Aggiorna lo stato di todoList con la copia aggiornata
        setTodoList(updatedTodoList);

        // Aggiungi il valore eliminato a deleteItem
        setDeleteItem([...deleteItem, todoList[value]]);
    }

    const toggleDeletItem = () => {
        setShowDeleteItem(!showDeleteItem)
    }


    // const doItem = (value) => {
    //     setIsDone(!isDone);
    //     if (!isDone) {
    //         setItemDone([...itemDone, value]);
    //         console.log(itemDone)
    //     }
    // }

    return (
        <>
            {error && <Error message={error} />}
            <button onClick={toggleDeletItem} className={showDeleteItem ? "py-2 px-4 m-6 rounded-md bg-blue-600" : "py-2 px-4 m-6 rounded-md bg-red-950"}>
                {showDeleteItem ? "Menu" : "Delete"}
            </button>
            <div className="main">

                {!showDeleteItem && (
                    <>
                        <div className="flex text-black justify-center items-center">
                            <input
                                onChange={handleInputChange}
                                value={userInput}
                                name="userToDo"
                                placeholder="Inserici una cosa da fare"
                                type="text"
                                className="p-2 rounded-l-md"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleButtonClick()
                                    }
                                }}
                            />
                            <input
                                onClick={handleButtonClick}
                                type="button"
                                className="rounded-r-md text-white bg-orange px-4 py-2"
                                value="Invia"
                            />
                        </div>

                        <div>
                            <ul className="p-3 card-todo">
                                {todoList.map((todo, index) => (
                                    <li
                                        className=" capitalize m-1 w-full items-center flex justify-between py-2 px-4 rounded-md bg-blue-600 border-2"
                                        key={index}
                                    >
                                        {todo}
                                        {/* <input
                                        type="checkbox"
                                        onChange={() => doItem(todo.item)} // Usa onChange per gestire lo stato della checkbox
                                        checked={isDone} // Usa checked per impostare lo stato corretto della checkbox
                                        className="bg-green-700 border-green-700 rounded-md"
                                    /> */}
                                        <span
                                            onClick={() => deleteInput(index)}
                                            className=" text-white"
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    </>
                )}

                {showDeleteItem && (
                    <div className="">
                        <h1 className="font-bold text-center uppercase">Cestino</h1>
                        <ul className="p-3 card-todo">
                            {deleteItem &&
                                deleteItem.map((itemDelete, index) => (
                                    <li
                                        className={`m-1 w-full items-center flex justify-between py-2 px-4 rounded-md bg-blue-600 border-2`}
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
            </div>
        </>
    );
}

export default ItemList;





