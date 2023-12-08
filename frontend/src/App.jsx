import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import coustomReactQuery from "./hooks/coustomReactQuary";

function App() {
  const [search, setSearch] = useState("");
  const [products, loading, error] = coustomReactQuery(
    `/api/products?search=${search}`
  );

  if (loading) return <h1>Loading...</h1>;

  return error ? (
    <h1>Someting went wrong</h1>
  ) : (
    <>
      <h1>Chai aut api witn react</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>No of produs are: {products.length}</h2>
    </>
  );
}

export default App;
