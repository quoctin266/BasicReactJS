import React from "react";
import logo from "../../assets/images/609173.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  handleDelete = (user) => {
    this.props.deleteRedux(user);
  };
  handleAdd = () => {
    this.props.addRedux();
  };

  render() {
    let { dataRedux } = this.props;
    return (
      <>
        <div>
          <h1>Welcome to ReactJS</h1>
          <img src={logo} alt="" width="20%" />
        </div>
        <div>
          {dataRedux &&
            dataRedux.length > 0 &&
            dataRedux.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}{" "}
                  <span onClick={() => this.handleDelete(item)}>x</span>
                </div>
              );
            })}
          <button type="button" onClick={this.handleAdd}>
            Add new
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRedux: (user) => dispatch({ type: "DELETE", payload: user }),
    addRedux: () => dispatch({ type: "ADD" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
