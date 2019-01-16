import React, { Component } from "react";

// export default class ToDoItem extends Component {
//     constructor(){
//         super();
//     }
//   render() {
//       //console.log(this.props)
//     return (
//       <li key={this.props.item}>
//         {this.props.todo}
//         <button onClick={this.props.deleteItem}>x</button>
//       </li>
//     );
//   }
// }

//export arrow function that bind this !!!

const ToDoItem = props => (
  <li>
    {props.todo}
    <button onClick={props.deleteItem}>x</button>
  </li>
);

export default ToDoItem;
