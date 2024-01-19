import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";


const initialFormData = {
  title: "",
  description: "",
  priority: 1
};

const handleSave = jest.fn();


it("renders without crashing", function () {
  render(<TodoForm
    initialFormData={initialFormData}
    handleSave={handleSave}
  />);
});


it("submitting form works", function () {
  const { container } = render(<TodoForm
    initialFormData={initialFormData}
    handleSave={handleSave}
  />);

  const titleInput = container.querySelector("#newTodo-title");
  const descriptionInput = container.querySelector("#newTodo-description");
  const priorityInput = container.querySelector("#newTodo-priority");


  fireEvent.input(titleInput, { target: { value: "test title" } });
  fireEvent.input(descriptionInput, { target: { value: "test description" } });
  fireEvent.input(priorityInput, { target: { value: 2 } });

  expect(handleSave).toHaveBeenCalledTimes(0);

  fireEvent.click(container.querySelector(".NewTodoForm-addBtn"));
  expect(handleSave).toHaveBeenCalledTimes(1);

  expect(container.querySelector("input[value='']")).toBeInTheDocument();
  expect(container.querySelector("textarea[value='Description']")).toBeInTheDocument();
  expect(container.querySelector("select[value=1]")).toBeInTheDocument();
});