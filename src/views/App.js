import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "./MyComponent";
import ListTodo from "./todo/ListTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TODO with ReactJS</p>
        <ListTodo />
        {/* <MyComponent /> */}
      </header>
    </div>
  );
}

export default App;
