import React from "react";
import "./ListTodoStyle.scss";
import ListComponent from "./ListComponent";
import AddItemComponent from "./AddItemComponent";
import { toast } from "react-toastify";

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
    toast.success("Added successfully!");
  };

  deleteItem = (task) => {
    let currentArr = this.state.listtodo;
    currentArr = currentArr.filter((item) => item.id !== task.id);
    this.setState({
      listtodo: currentArr,
    });
    toast.success("Deleted successfully!");
  };

  saveItem = (newItem) => {
    let currentList = [...this.state.listtodo];
    let index = currentList.findIndex((obj) => obj.id === newItem.id);
    currentList[index] = newItem;
    this.setState({
      listtodo: currentList,
    });
    toast.success("Updated successfully!");
  };

  render() {
    return (
      <>
        <AddItemComponent addNew={this.addNew} />
        <ListComponent
          listtodo={this.state.listtodo}
          deleteItem={this.deleteItem}
          saveItem={this.saveItem}
        />
      </>
    );
  }
}

export default ListTodo;
