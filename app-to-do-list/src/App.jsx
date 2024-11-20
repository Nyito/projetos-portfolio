import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

  return (
    <>
    <div class="header"><h1>Tarefa X</h1></div>
      <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
        <h1>Minha Primeira To-Do List</h1>
        <p>Veja abaixo minhas tarefas:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>✅ Estudar React</li>
          <li>📚 Ler um livro</li>
          <li>💻 Trabalhar no portfólio</li>
          <li>🏃‍♂️ Fazer exercícios</li>
        </ul>
      </div>
    </>
  );
}

export default App
