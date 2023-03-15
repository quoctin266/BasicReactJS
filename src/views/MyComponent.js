import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arr: [
      { jobID: "001", title: "Dev", salary: "500$" },
      { jobID: "002", title: "Tester", salary: "400$" },
      { jobID: "003", title: "PM", salary: "1000$" },
    ],
  };

  handleOnChangeFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleOnChangeLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleOnClick = (e) => {
    e.preventDefault();
    alert("clicked");
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            value={this.state.firstName}
            onChange={this.handleOnChangeFirstName}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            value={this.state.lastName}
            onChange={this.handleOnChangeLastName}
          />
          <br />
          <input type="submit" value="Submit" onClick={this.handleOnClick} />
        </form>
        <ChildComponent arr={this.state.arr} />
      </>
    );
  }
}

export default MyComponent;
