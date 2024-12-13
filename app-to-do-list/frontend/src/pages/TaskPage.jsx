import React from "react";
import "./TaskPage.css"

function TaskPage() {
    return (
        <div class="container">
            <div class="center-box">
                <div class="task-header"> 
                    <h1>  Nova Tarefa  </h1>
                </div>
                <div class='task-body'>
                
                </div>
                <div class='task-footer'>
                    <button class='btn btn-clear'>Limpar</button>
                    <button class='btn btn-back'>Voltar</button>
                    <button class="btn btn-create-task">Criar Tarefa</button>
                </div>
                
            </div>
        </div>
    );
}

export default TaskPage;