import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * States:
 * - None
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
  console.log("todos: ", todos);
  return (
      <div>
        {todos.map(td =>
          <EditableTodo
            key={td.id}
            todo={td}
            update={update}
            remove={remove}
          />
        )}
      </div>
  );
}

export default EditableTodoList;
