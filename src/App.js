import "./App.css";
import React,{useState} from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //khai bao state [value, function]
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>Khai's todo</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
