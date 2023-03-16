import React from "react";

class ListTodo extends React.Component {
  state = {
    listtodo: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Playing games" },
      { id: "todo3", title: "Watching movies" },
    ],
  };
  render() {
    return (
      <>
        <div></div>
      </>
    );
  }
}

export default ListTodo;
