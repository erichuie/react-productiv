import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * States:
 * - formData
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

function TodoForm({ initialFormData, handleSave }) {

  const [formData, setFormData] = useState(initialFormData);


  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();

    if (!("id" in formData)) {
      formData.id = uuid();
    }
    console.log("submitting form:", formData)


    handleSave(formData);
    setFormData(initialFormData);
  }

  return (
      <form className="TodoForm" onSubmit={handleSubmit}>

        <div className="mb-3">
          <input
              id="TodoForm-title"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={handleChange}
              value={formData.title}
              aria-label="Title"
          />
        </div>

        <div className="mb-3">
          <textarea
              id="TodoForm-description"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={handleChange}
              value={formData.description}
              aria-label="Description"
          />
        </div>

        <div className="mb-3 d-flex justify-content-between">
          <div className="w-75 d-flex justify-content-between">
            <label htmlFor="TodoForm-priority"
                   className="d-inline-flex">Priority:&nbsp;&nbsp;
            </label>
            <select id="TodoForm-priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="form-control form-control-sm d-inline-flex"
            >
              <option value={1}>Ultra-Über</option>
              <option value={2}>Über</option>
              <option value={3}>Meh</option>
            </select>
          </div>
          <button className="btn-primary rig btn btn-sm TodoForm-addBtn">
            Gø!
          </button>
        </div>

      </form>
  );
}

export default TodoForm;
