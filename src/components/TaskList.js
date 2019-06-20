import React from 'react';
import Task from './Task';
const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active === true);
    const done = props.tasks.filter(task => task.active !== true);

    if (done.length >= 2) {
        done.sort((a, b) => b.finishDate - a.finishDate)
    }

    if (active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();
            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        })
    }

    const activeTasks = active.map(task =>
        <Task
            key={task.id}
            task={task}
            deleteTask={props.deleteTask}
            changeTaskStatus={props.changeTaskStatus}
        />)

    const doneTasks = done.map(task =>
        <Task
            key={task.id}
            task={task}
            deleteTask={props.deleteTask}
            changeTaskStatus={props.changeTaskStatus}
        />)

    return (
        <>
            <div className="active">
                <h1>Zadania do zrobienia</h1>
                {activeTasks.length > 0 ? activeTasks : "Nie masz nic do zrobienia"}

            </div>
            <hr />
            <div className="done">
                <h3>Zadania zrobione ({doneTasks.length})</h3>
                {doneTasks.length > 5 && <span style={{ fontSize: "25px" }}>Ostatnie 5 zrobionych zadań</span>}
                {doneTasks.slice(0, 5)}
                {/* doneTasks.slice(0,5) wycina tablice od indexu 0, 5elementów i je wyświetla */}

            </div>
        </>
    );
}

export default TaskList;