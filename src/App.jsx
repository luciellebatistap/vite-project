
import { useState } from "react"
import './App.css'
function App() {
  const [tarefa, setTarefa] = useState("")
  const [lista, setLista] = useState([]
  return (
    
    <>
    <div className="container"> 
    <h1> Lista de Tarefas</h1>
    <input type="text" placeholder="Digite uma tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)}/>
   <button>Adicionar</button>
    </div>
     </>
  
  )
}
export default App
