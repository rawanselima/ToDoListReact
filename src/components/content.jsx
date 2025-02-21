import { IoIosTrash } from "react-icons/io";
import { useEffect } from "react";
export default function Content(props) {
  const { items, setItems, itemsSearch } = props;

  function isChecked(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, check: !item.check } : item
      )
    );
  }

  function Delete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  useEffect(() => {}, [items, itemsSearch]);

  return (
    <section className="content">
      <form>
        {itemsSearch.length > 0
          ? itemsSearch.map((item, index) => {
              return (
                <label
                  className={`item ${item.check ? "checked" : ""}`}
                  key={index}
                  htmlFor="checkbox"
                >
                  <input
                    checked={item.check}
                    type="checkbox"
                    name="checkbox"
                    onChange={() => isChecked(item.id)}
                  />
                  <p className="item-text">
                    <span> {item.data} </span>
                    <IoIosTrash
                      className="trash"
                      onClick={() => Delete(item.id)}
                    />
                  </p>
                </label>
              );
            })
          : items.length > 0
          ? items.map((item, index) => {
              return (
                <label
                  className={`item ${item.check ? "checked" : ""}`}
                  key={index}
                  htmlFor="checkbox"
                >
                  <input
                    checked={item.check}
                    type="checkbox"
                    name="checkbox"
                    onChange={() => isChecked(item.id)}
                  />
                  <p className="item-text">
                    <span> {item.data} </span>
                    <IoIosTrash
                      className="trash"
                      onClick={() => Delete(item.id)}
                    />
                  </p>
                </label>
              );
            })
          : "No Item Founded"}
      </form>
    </section>
  );
}
