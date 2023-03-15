import React from "react";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
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
      </>
    );
  }
}

export default MyComponent;
