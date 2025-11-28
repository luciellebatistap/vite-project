<<<<<<< Updated upstream
import { useState } from "react"
=======
>>>>>>> Stashed changes
import './App.css'
function App() {
  const [tarefa, setTarefa] = useState("")
  const [lista, setLista] = useState([])

  

  return (
<<<<<<< Updated upstream
    <>
    <div className="container"> 
    <h1> Lista de Tarefas</h1>
    <input type="text" placeholder="Digite uma tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)}/>
   <button>Adicionar</button>
    </div>
     </>
=======
>>>>>>> Stashed changes
    
  )
}

export default App
