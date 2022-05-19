import { useState } from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  const defaultListitem = [
    { nome: "tarefa 1", completa: false },
    { nome: "tarefa 2", completa: false },
    { nome: "tarefa 3", completa: false },
  ];

  const [items, setItems] = useState(defaultListitem);
  const [taskValue, setTaskValue] = useState("");

  const handleTaskSubmit = (event) => {
    if (items.find((task) => task.nome === taskValue)) {
      event.preventDefault();
      return;
    }
    setItems([...items, { nome: taskValue, completa: false }]);
    setTaskValue("");
    event.preventDefault();
    console.log(items);
  };

  const handleOnTaskChanged = (event, item) => {
    setItems(
      items.map((i) => {
        if (i.name === item.name) {
          return {
            ...i,
            completa: event.target.checked,
          };
        }
        return i;
      })
    );
  };

  return (
    <div className="todo-list-container">
      <p>Você concluiu um total de {items.length} items</p>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          value={taskValue}
          placeholder="Adicione uma nova tarefa"
          onChange={(event) => setTaskValue(event.target.value)}
        />
        <button type="submit">Adicionar tarefa</button>
      </form>
      <ul>
        {items.map((item) => (
          <TodoListItem onTaskChanged={handleOnTaskChanged} item={item} />
        ))}
      </ul>
    </div>
  );
};
