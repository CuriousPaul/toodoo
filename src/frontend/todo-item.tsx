import React, { useState } from "react";
import classnames from "classnames";
import { Todo, TodoUpdate } from "../todo";
import TodoTextInput from "./todo-text-input";
import styles from './TodoItem.module.css';

export function TodoItem({
  todo,
  onUpdate,
  onDelete,
}: {
  todo: Todo;
  onUpdate: (update: TodoUpdate) => void;
  onDelete: () => void;
}) {
  const { id } = todo;
  const [editing, setEditing] = useState(false);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleSave = (text: string) => {
    if (text.length === 0) {
      onDelete();
    } else {
      onUpdate({ id, text });
    }
    setEditing(false);
  };

  const handleToggleComplete = () =>
    onUpdate({ id, completed: !todo.completed });

    const handleToggleImportant = () =>
    onUpdate({ id, important: !todo.important });

  let element;
  if (editing) {
    element = (
      <TodoTextInput
        initial={todo.text}
        onSubmit={handleSave}
        onBlur={handleSave}
      />
    );
  } else {
    element = (
      <div className={styles.view}>
    <div className={styles['checkbox-container']}>
      <input
        className={styles.toggle}
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
      />
      <input
        className={styles['toggle-important']}
        type="checkbox"
        checked={todo.important}
        onChange={handleToggleImportant}
      />
    </div>
    <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
    <button className={styles.destroy} onClick={() => onDelete()} />
  </div>
    );
  }

  return (
    <li
      className={classnames({
        completed: todo.completed,
        editing,
      })}
    >
      {element}
    </li>
  );
}
