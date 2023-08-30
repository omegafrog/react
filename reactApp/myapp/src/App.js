import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState(0);
  const convertDollar = (event) => {
    setDollars((prev) => event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1> The coins ({coins.length})</h1>
      <div>
        How much dollar you have?
        <input
          value={dollars}
          placeholder="dollars"
          onChange={convertDollar}
        ></input>
      </div>
      <hr></hr>
      {loading ? <strong>loading...</strong> : null}
      <select>
        {coins.map((item) => (
          <option>
            {item.name}({item.symbol}) : {item.quotes.USD.price.toFixed(2)}$ ...
            you can buy {(dollars / item.quotes.USD.price).toFixed(3)}{" "}
            {item.symbol}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
