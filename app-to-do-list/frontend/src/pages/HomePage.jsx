import React from "react";
import "./HomePage.css"

function HomePage() {
    return (
        <div class="container">
            <div class="left"></div>
            <div class="right">
                <nav class="menu">
                    <ul>
                        <li> <a href="tarefa">Criar Tarefa</a>  </li>
                        <li> <a href="#">Buscar Tarefas</a>  </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HomePage;