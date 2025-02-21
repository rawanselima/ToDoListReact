import Header from "./components/header";
import Content from "./components/content";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [itemsSearch, setItemsSearch] = useState([]);
  console.log(itemsSearch);

  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <main>
      <Header
        items={items}
        setItems={setItems}
        itemsSearch={itemsSearch}
        setItemsSearch={setItemsSearch}
      />
      <Content items={items} setItems={setItems} itemsSearch={itemsSearch} />
    </main>
  );
}

export default App;
