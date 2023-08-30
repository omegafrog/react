import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const removeList = (event) => {
    setTodos((prev) => {
      prev.splice(event.target.key, 1);
      console.log("prev", prev);
      return prev;
    });
  };
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") return;
    setTodos((prev) => [todo, ...prev]);
    setTodo("");
  };
  console.log(todos);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your todo"
          onChange={onChange}
          value={todo}
        ></input>
        <button>Add To Do</button>
      </form>
      <ul id="todoList">
        {todos.map((item, index) => (
          <li key={index}>
            <div>
              {item}
              <button onClick={removeList}>❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
