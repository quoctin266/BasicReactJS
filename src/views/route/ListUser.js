import React from "react";
import axios from "axios";
import "./ListUser.scss";
import withRouter from "./withRouter";

class ListUsers extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users");
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleDetail = (user) => {
    this.props.router.navigate(`/user/${user.id}`);
  };

  render() {
    const listUsers = this.state.listUsers;
    return (
      <>
        <div className="title">
          <h2>Users List</h2>
        </div>
        <div className="content">
          {listUsers.map((item, index) => {
            return (
              <>
                <div className="user" key={item.id}>
                  {index + 1} - {item.first_name} {item.last_name}
                  <button
                    className="view"
                    onClick={() => this.handleDetail(item)}
                    key={item.id}
                  >
                    View Detail
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default withRouter(ListUsers);
