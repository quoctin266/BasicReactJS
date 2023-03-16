import React from "react";
import "./ListTodoStyle.scss";
import ListComponent from "./ListComponent";
import AddItemComponent from "./AddItemComponent";

class ListTodo extends React.Component {
  state = {
    listtodo: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Playing games" },
      { id: "todo3", title: "Watching movies" },
    ],
  };

  addNew = (item) => {
    this.setState({
      listtodo: [...this.state.listtodo, item],
    });
  };

  deleteItem = (task) => {
    let currentArr = this.state.listtodo;
    currentArr = currentArr.filter((item) => item.id !== task.id);
    this.setState({
      listtodo: currentArr,
    });
  };

  render() {
    return (
      <>
        <AddItemComponent addNew={this.addNew} />
        <ListComponent
          listtodo={this.state.listtodo}
          deleteItem={this.deleteItem}
        />
      </>
    );
  }
}

export default ListTodo;
