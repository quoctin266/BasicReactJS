import React from "react";

class AddItemComponent extends React.Component {
  state = {
    title: "",
  };

  handleAdd = () => {
    if (!this.state.title) {
      alert("Must not be empty!");
      return;
    }
    this.props.addNew({
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
    });
    alert("Added");
    this.setState({
      title: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  render() {
    return (
      <div className="searchBar">
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default AddItemComponent;
