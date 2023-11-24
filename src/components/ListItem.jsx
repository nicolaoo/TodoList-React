import React, { useState } from "react";
import '../components/ListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Error from "./ErrorMessage.jsx";
import DeleteItem from "./DeleteItem.jsx"

function ItemList({ cangheColor, color }) {
    // mostra gli elementi del cestino
    const [showDeleteItem, setShowDeleteItem] = useState(false);
    // la stringa che scrive l'utente
    const [userInput, setUserInput] = useState('');
    // Inizializza lo stato dell'elenco delle attività
    const [todoList, setTodoList] = useState([]);
    // array contenente gli elementi eliminati
    const [deleteItem, setDeleteItem] = useState([]);
    // errore che compare nel momento in cui l'utente non rispetta 
    // le regole per l'invio diparole non adatte 
    const [error, setError] = useState('');
    // elementi eliminati per sempre
    const [itemToDelete, setItemToDelete] = useState(null);


    // funzione che gestisce il popup per la cancellazione finale dell'elemeto nel cestino
    // e la visualizzazione della home 
    const FinallyDelete = (value) => {
        setItemToDelete(value);
        setShowDeleteItem(true);
    }


    // funzione che gestisce la logica per la cancellazione 
    // permanente degli elemnti nel cestino
    const permentalyDelete = (value) => {
        // Copia l'array deleteItem per non modificarlo direttamente
        const upperToDoList = [...deleteItem];

        // Implementa la logica per l'eliminazione definitiva dell'elemento
        upperToDoList.splice(value, 1);

        // Aggiorna lo stato di todoList con la copia aggiornata
        setDeleteItem(upperToDoList)

        // console.log(`Elemento ${itemToDelete} eliminato definitivamente.`);
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


    // Chiude il modulo di conferma senza eliminare definitivamente l'elemento
    const confirmDelete = () => {

        setShowDeleteItem(true);
        setItemToDelete(null);
    }


    // Aggiorna la todo con il valore dell'input
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
        setError('')
    };


    // gestisce l'invio e della todo con eventuali errori 
    // di spaziatura e di duplicazione
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


    // elimina l'elemento selezionato dall'utente 
    // spostandolo nel cestino
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


    // mostra il cestino oppure la home a seconda 
    // del valore di showDeleteItem
    const toggleDeletItem = () => {
        setShowDeleteItem(!showDeleteItem)
    }

    return (
        <>
            <button onClick={cangheColor} className={` absolute top-0 right-0 py-2 px-4 m-6 rounded-md ${color ? "bg-red-900" : " bg-emerald-700"}`}>
                {!color ? "Green" : "Red"}
            </button>
            {error && <Error message={error} />}
            <button
                onClick={toggleDeletItem}
                className={!color ? "py-2 px-4 m-6 rounded-md bg-red-900" : "py-2 px-4 m-6 rounded-md bg-emerald-700"}
            >
                {showDeleteItem ? "Menu" : "Basket"}
            </button>

            <div className={`main ${!color ? "bg-darkOrange" : " bg-green-600 shadow-none"}`}>

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
                                className={`rounded-r-md text-white ${!color ? "bg-orange" : "bg-lime-500"} px-4 py-2`}
                                value="Invia"
                            />
                        </div>

                        <div>
                            <ul className="p-3 card-todo">
                                {todoList.map((todo, index) => (
                                    <li
                                        className={`capitalize m-1 w-full items-center flex justify-between py-2 px-4 rounded-md ${!color ? "bg-red-900" : " bg-emerald-900"} border-2`}
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

                <DeleteItem
                    showDeleteItem={showDeleteItem}
                    deleteItem={deleteItem}
                    FinallyDelete={FinallyDelete}
                    itemToDelete={itemToDelete}
                    permentalyDelete={permentalyDelete}
                    confirmDelete={confirmDelete}
                    color={color}
                />
            </div>
        </>
    );
}

export default ItemList;





