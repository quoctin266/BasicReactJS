import React from "react";
import axios from "axios";

class ListUsers extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    const res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUsers: res.data.data,
    });
  }

  render() {
    const listUsers = this.state.listUsers;
    return (
      <div>
        <h2>Users List</h2>
      </div>
    );
  }
}

export default ListUsers;
