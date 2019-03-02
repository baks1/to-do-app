import React, { Component } from "react";
import "./App.css";
import List from "./List";
import Buttons from "./Buttons";

class App extends Component {
  state = {
    number: 1,
    tasks: []
  };

  addTask = () => {
    this.setState(prevState => ({
      number: prevState.number + 1,
      tasks: [...this.state.tasks, `Number task ${this.state.number}`]
    }));
  };

  deleteTask = () => {
    if (this.state.number > 1) {
      const tasks = [...this.state.tasks];
      tasks.pop();
      this.setState(prevState => ({
        number: prevState.number - 1,
        tasks: tasks
      }));
    }
  };

  clearTask = () => {
    this.setState(() => ({
      number: 1,
      tasks: []
    }));
  };

  render() {
    return (
      <div className="wrapper">
        <Buttons
          add={this.addTask}
          delete={this.deleteTask}
          clear={this.clearTask}
        />
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
