import React from "react";

class ListComponent extends React.Component {
  handleDelete = (item) => {
    this.props.deleteItem(item);
  };

  render() {
    return (
      <div className="todoList">
        {this.props.listtodo.map((item, index) => {
          return (
            <div className="todoRow" key={item.id}>
              <span className="todoItem">
                {index + 1} - {item.title}
              </span>
              <button className="edit">Edit</button>
              <button
                className="delete"
                onClick={() => this.handleDelete(item)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListComponent;
