import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  counter = 1
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać w końcu w wiedźmina",
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      }
    ]
  }
  deleteTask = (id) => {
    console.log("deleteTask" + id)
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1)
    this.setState({
      tasks: tasks
    })
  }
  changeTaskStatus = (id) => {
    console.log("changeTaskStatus" + id);
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({ tasks })
  }
  addTask = (text, date, important) => {

    const task = {

      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,

    }
    console.log(task)
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
      // tworzymy nowa tablice ze stary statem + nowym taskiem
    }))
    return true
  }

  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
        <AddTask addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} changeTaskStatus={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
