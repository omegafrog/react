import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [searchKeyword, setKeyword] = useState("");
  const onClick = () => setCounter((cur) => (cur += 1));
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => console.log("Calling api that i want run only once"), []);
  useEffect(() => {
    if (searchKeyword.length >= 1) {
      console.log("searching...:", searchKeyword);
    }
  }, [searchKeyword]);
  return (
    <div>
      <h1>hi</h1>
      <input
        type="text"
        placeholder="search here"
        value={searchKeyword}
        onChange={onChange}
      ></input>
      <h3>{counter}</h3>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
