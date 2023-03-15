import React from "react";

class ChildComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  render() {
    const { arr } = this.props;
    return (
      <>
        {arr.map((item, index) => {
          return (
            <div key={item.jobID}>
              {item.title} - {item.salary}
            </div>
          );
        })}
      </>
    );
  }
}

export default ChildComponent;
