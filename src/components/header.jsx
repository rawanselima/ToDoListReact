import { useState } from "react";
export default function Header(props) {
  const { items, setItems, itemsSearch, setItemsSearch } = props;

  const addItems = (e) => {
    e.preventDefault();
    let newItem = {
      data: new FormData(e.target).get("add"),
      check: false,
      id: Date.now(),
    };
    let inputAdd = (e.target.querySelector("[name='add']").value = "");
    if (newItem.data.trim()) return setItems([...items, newItem]);
    else return items;
  };

  function search(dataInput) {
    dataInput
      ? setItemsSearch(
          items.filter((item) =>
            item.data.includes(dataInput.toLowerCase()) ? item : null
          )
        )
      : setItemsSearch([]);
  }

  return (
    <header>
      <form
        onSubmit={(e) => {
          addItems(e);
        }}
      >
        <input type="text" placeholder="Add New Item" name="add" />
        <button type="submit">
          <span>+</span> Add Item
        </button>
        <input
          type="text"
          name="search"
          placeholder="Search Item"
          onChange={(e) => search(e.target.value)}
        />
      </form>
    </header>
  );
}
