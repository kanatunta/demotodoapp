import React, { Component } from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ""
    };
  }

  HandleChange = e => {
    const todoCopy = e.target.value;
    //console.log(e.target.value);
    this.setState({ todo: todoCopy });
    //console.log(this.state);
  };

  HandleClick = () => {
    const todosCopy = this.state.todos.slice();
    const blankTodo = "";
    if (this.state.todo.length) {
      todosCopy.push(this.state.todo);
      this.setState(() => ({
        todos: todosCopy,
        todo: blankTodo
      }));
    }
    //console.log(this.state);
  };

  HandleDeleteItem = i => {
    const todosCopy = this.state.todos.slice();
    //console.log('will be delete:',i)
    todosCopy.splice(i, 1);
    this.setState({todos: todosCopy});
  };

  render() {
    const currentTodos = this.state.todos.map((e, i) => (
      <ToDoItem todo={e} key={i} item={i} deleteItem={()=>(this.HandleDeleteItem(i))} />
    ));    
    return (
      <>
        <h1>ToDo App</h1>
        <input
          placeholder="Enter todo"
          onChange={this.HandleChange}
          value={this.state.todo}
        />
        <button onClick={this.HandleClick}>Add</button>
        <ul>{currentTodos.length ? currentTodos : "nothingt to do ;)"}</ul>
      </>
    );
  }
}

export default App;
