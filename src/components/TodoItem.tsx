import { useState } from "react";
import { useTodoStore } from "../services/store";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({
  id,
  title,
  completed,
}: {
  id: number;
  title: string;
  completed: boolean;
}) => {
  const { removeTodo, toggleTodo, editTodo } = useTodoStore();
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleEdit = () => {
    const value: string = prompt(`Edit This task`, title) as string;
    editTodo(id, value);
  };

  return (
    <div
      className="todo_item"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="items">
        <div style={actions}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => {
              toggleTodo(id);
            }}
          />
          <p style={!completed ? text : strikeText} onDoubleClick={handleEdit}>
            {title}
          </p>
        </div>

        <div
          style={isHovering ? x : xLeave}
          onClick={() => {
            removeTodo(id);
          }}
        >
          <FaTrash size={18} color="red" />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

const text = {
  fontSize: "20px",
  fontFamily: "satoshi",
  fontWeight: "400",
};
const strikeText = {
  fontSize: "20px",
  textDecoration: "line-through",
  color: "gray",
  fontFamily: "satoshi",
  fontWeight: "300",
};
const x = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: "#d0e2d6",
  transition: "all 0.3s ease-in",
};
const xLeave = {
  color: "red",
  cursor: "pointer",
  display: "none",
};

const actions = {
  display: "flex",
  alignItems: "center",
  justifyContents: "center",
  gap: "10px",
};
