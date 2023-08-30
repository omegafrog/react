import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("Im created");
    return () => console.log("destroyed");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((cur) => !cur);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
