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

  // submit and check callback is called
  fireEvent.click(container.querySelector(".NewTodoForm-addBtn"));
  expect(handleSave).toHaveBeenCalledTimes(1);

  // check initial form values reset
  expect(container.querySelector("input[value='']")).toBeInTheDocument();
  expect(container.querySelector("#newTodo-description").innerHTML).toEqual("");

  // check that currently selected value is default initial
  const select = container.querySelector("#newTodo-priority")
  expect(select.options[select.selectedIndex].value).toEqual("1");

});