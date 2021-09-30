import React from "react";

export default function Todo({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            comleted: !item.comleted,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${todo.comleted ? "completed" : ""}`}>
          {text}
        </li>
        <button onClick={completeHandler} className="complete-btn">
          Complete
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          Delete
        </button>
      </div>
    </div>
  );
}
