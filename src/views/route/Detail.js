import React from "react";
import withRouter from "./withRouter";
import axios from "axios";

class Detail extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.router && this.props.router.params) {
      let id = this.props.router.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  handleBack = () => {
    this.props.router.navigate("/user");
  };

  render() {
    let { user } = this.state;
    let isEmpty = Object.keys(user).length === 0;
    return (
      <>
        <div>User Detail</div>
        {!isEmpty && (
          <>
            <div>
              Username: {user.first_name} - {user.last_name}
            </div>
            <div>Email: {user.email}</div>
            <div>
              <img src={user.avatar} alt="" />
            </div>
            <button type="button" onClick={this.handleBack}>
              Back
            </button>
          </>
        )}
      </>
    );
  }
}

export default withRouter(Detail);
