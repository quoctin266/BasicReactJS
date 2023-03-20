import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arr: [
      { jobID: "001", title: "Dev", salary: "500" },
      { jobID: "002", title: "Tester", salary: "400" },
      { jobID: "003", title: "PM", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    // const newArr = this.state.arr.map((item, index) => {
    //   return item;
    // });
    // newArr.push(job);

    this.setState({
      // arr: newArr,
      arr: [...this.state.arr, job],
    });
  };

  deleteJob = (job) => {
    let currentArr = this.state.arr;
    currentArr = currentArr.filter((item) => item.jobID !== job.jobID);
    this.setState({
      arr: currentArr,
    });
  };

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent arr={this.state.arr} deleteJob={this.deleteJob} />
      </>
    );
  }
}

export default MyComponent;
