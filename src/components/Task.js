import React from 'react';
const Task = (props) => {
    const style = {
        color: 'red',
    }
    const { text, date, id, active, important, finishDate } = props.task;
    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text} </strong><span>do: {date} </span>
                    <button onClick={() => props.changeTaskStatus(id)}>Zostało zrobione</button>
                    <button onClick={() => props.deleteTask(id)}>X</button>
                </p>


            </div>
        );
    } else {

        const finish = new Date(finishDate).toLocaleString()

        return (
            <div>
                <p>
                    <strong >{text} </strong><span>(zrobić do: {date} )</span>
                    <br />
                    -Potwierdzenie wykonania:<span> {finish}</span>
                    <button onClick={() => props.deleteTask(id)}>X</button>
                </p>
            </div >
        )
    }
}

export default Task;