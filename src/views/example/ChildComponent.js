import React from "react";

class ChildComponent extends React.Component {
  state = {
    status: false,
  };

  handleToogle = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  handleDeleteButton = (item) => {
    this.props.deleteJob(item);
  };

  render() {
    const { arr } = this.props;
    return (
      <>
        {this.state.status === false ? (
          <div>
            <button onClick={this.handleToogle}>Show</button>
          </div>
        ) : (
          <>
            <div>
              {arr.map((item, index) => {
                if (item.salary >= 400) {
                  return (
                    <div key={item.jobID}>
                      {item.title} - {item.salary}${" "}
                      <span onClick={() => this.handleDeleteButton(item)}>
                        x
                      </span>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div>
              <button onClick={this.handleToogle}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
