import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo: { id, title, description, priority }
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * States
 * - isEditing (true/false)
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  //change name of formData to be specific to editableTodo,
  function handleSave(formData) {
    update(formData);
    toggleEdit();
  }

  return (
    <div className="EditableTodo">
      {isEditing
        ? <TodoForm
          initialFormData={todo}
          handleSave={handleSave}
        />
        : <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo
            todo={todo}
          />
        </div>
      }
    </div>
  );
}

export default EditableTodo;
