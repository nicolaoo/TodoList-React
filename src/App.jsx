import ItemList from './components/ListItem'
import './app.css'
import { useState } from 'react';

function App() {
  const [color, setColorBlue] = useState(false);

  const cangheColor = () => {
    setColorBlue(!color)
  }

  return (
    <>
      <div className={`todo-list  ${!color ? "bg-orange" : "bg-emerald-900"}`}>
        <div className="container-todo">
          <ItemList cangheColor={cangheColor}
            color={color} />
        </div>
      </div>
    </>
  )

}

export default App
