import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleOnChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleOnChangeSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };

  handleOnClick = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Missing fields");
      return;
    }
    this.props.addNewJob({
      jobID: "004",
      title: this.state.title,
      salary: this.state.salary,
    });
    alert("Added.");
    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">Job's title:</label>
          <br />
          <input
            type="text"
            id="fname"
            value={this.state.title}
            onChange={this.handleOnChangeTitle}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            id="lname"
            value={this.state.salary}
            onChange={this.handleOnChangeSalary}
          />
          <br />
          <input type="submit" value="Submit" onClick={this.handleOnClick} />
        </form>
      </>
    );
  }
}

export default AddComponent;
