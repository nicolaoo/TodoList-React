import ItemList from './components/ListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './app.css'

function App() {
  return (
    <>
      <div className="container-todo">
        <ItemList />
      </div>
    </>
  )

}

export default App
