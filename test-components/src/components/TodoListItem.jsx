export const TodoListItem = (props) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.item.completa}
        onChange={(event) => props.onTaskChanged(event, props.item)}
      />
      {props.item.name}
    </li>
  );
};
