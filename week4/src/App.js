import React from "react";
import PostDetail from "./components/PostDetail";
import RegisterUser from "./components/RegisterUser";
import Users from "./components/User";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Week 4 Task1</h1>
      </header>
      <PostDetail />
      <header className="App-header">
        <h1>Week 4 Task2.1 RegisterUser</h1>
      </header>
      <RegisterUser/>
      <header className="App-header">
        <h1>Week 4 task 2.2 USERDETAIL MEMO</h1>
      </header>
      <Users/>
      <header className="App-header">
        <h1>Week 4 task 2.3 Form & Debounce Method</h1>
      </header>
      <Form/>
    </div>
   
  );
}

export default App;
