import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";
import ListTodo from "./todo/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./nav/Nav";
import Home from "./example/Home";
import ListUsers from "./route/ListUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./route/Detail";
import GoogleMapAPI from "./example/GoogleMap";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/about" element={<MyComponent />} />
            <Route path="/user" element={<ListUsers />} />
            <Route path="/user/:id" element={<Detail />} />
            <Route path="/testmap" element={<GoogleMapAPI />} />
          </Routes>
        </div>
        <div className="App-content"></div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
