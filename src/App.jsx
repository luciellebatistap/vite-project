
import { useState } from "react"
import './App.css'
function App() {
  const [tarefa, setTarefa] = useState("")
  const [lista, setLista] = useState([])
  function adicionarTarefa() {
    const texto = tarefa.trim();       
    if (texto === "") return;
    setLista([...lista, texto]);
    setTarefa("");
  }
    return (
    <>
    <div className="container"> 
    <h1> Lista de Tarefas</h1>
    <input type="text" placeholder="Digite uma tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)}/>
   <button onClick={adicionarTarefa}> Adicionar</button>
   <ul>
  {lista.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
    </div>
     </>
  
  )
}
export default App
