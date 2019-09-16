import React, { Component } from 'react';
import './App.css';
import  CheckBox  from './components/Checkbox/Checkbox';
import { TransitionGroup } from 'react-transition-group';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id: 1, value: "Task1", isChecked: false, isLoading:false},
        {id: 2, value: "Task2", isChecked: false, isLoading:false},
        {id: 3, value: "Task3", isChecked: false, isLoading:false},
        {id: 4, value: "Task4", isChecked: false, isLoading:false}
      ]
    }
  }

  handleCheckElement = (event) => {
    let checkedValue = event.target.checked;
    let todos = this.state.todos;
    todos.forEach(todo => {
      if (todo.value === event.target.value) {
        todo.isLoading = true;
        this.setState({todos: todos});
        setTimeout(
          function() {
            todo.isChecked =  checkedValue;
            console.log(todo);
            todo.isLoading = false;
          },
          10000, checkedValue
        );
      }
    });
setTimeout(function(){

console.log(todos)
  this.setState({todos: todos});
}.bind(this), 50000, checkedValue);  }

  render() {
    return (
      <div className="App">
        <h1> Check/Uncheck Checkbox with Animation Demo </h1>
        <ul>
        {
          this.state.todos.map((todo) => {
            return (
                <TransitionGroup className="items-section__list">
                  <CheckBox key={todo.id} handleCheckElement={this.handleCheckElement} {...todo} />
                </TransitionGroup>
              );
          })
        }
        </ul>
      </div>
    );
  }
}

export default App