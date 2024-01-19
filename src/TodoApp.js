import React, { useState } from "react";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    //make into a callback function
    setTodos(
      [...todos, newTodo]
    );
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    //make into a callback function
    setTodos(todos.map(td =>
      td.id === updatedTodo.id
        ? updatedTodo
        : td
    ));
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(() => todos.filter(td =>
      td.id !== id
    ));
  }

  //could have put initial data within the form component
  //make name initialFormTodo
  const initialFormData = {
    title: '',
    description: '',
    priority: 1,
  };

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todos.length > 0
            ? <EditableTodoList
              todos={todos}
              update={update}
              remove={remove}
            />
            : <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">
          {todos.length > 0 &&
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
          }

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm
              initialFormData={initialFormData}
              handleSave={create}
            />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;