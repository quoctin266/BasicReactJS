import React from "react";

class ListComponent extends React.Component {
  state = {
    editItem: {},
  };

  handleDelete = (item) => {
    this.props.deleteItem(item);
  };

  handleEdit = (item) => {
    let isEmpty = Object.keys(this.state.editItem).length === 0;
    if (!isEmpty && item.id === this.state.editItem.id) {
      this.props.saveItem(this.state.editItem);
      this.setState({
        editItem: {},
      });
      return;
    }

    this.setState({
      editItem: item,
    });
  };

  handleChange = (e) => {
    let newItem = { ...this.state.editItem };
    newItem.title = e.target.value;
    this.setState({
      editItem: newItem,
    });
  };

  render() {
    let isEmpty = Object.keys(this.state.editItem).length === 0;

    return (
      <div className="todoList">
        {this.props.listtodo.map((item, index) => {
          return (
            <div className="todoRow" key={item.id}>
              {isEmpty ? (
                <span className="todoItem">
                  {index + 1} - {item.title}
                </span>
              ) : (
                <>
                  {item.id === this.state.editItem.id ? (
                    <div className="todoItemInput">
                      {index + 1} -{" "}
                      <input
                        value={this.state.editItem.title}
                        onChange={this.handleChange}
                      />
                    </div>
                  ) : (
                    <span className="todoItem">
                      {index + 1} - {item.title}
                    </span>
                  )}
                </>
              )}

              <button className="edit" onClick={() => this.handleEdit(item)}>
                {!isEmpty && item.id === this.state.editItem.id
                  ? "Save"
                  : "Edit"}
              </button>
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
