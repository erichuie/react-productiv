import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

import TodoApp from "./TodoApp";


const TEST_TODO = {
  id: 1,
  title: "Make Todo list",
  description: "creating todo list",
  priority: 1
};

let renderedComp;
let container;
beforeEach(function () {
  renderedComp = render(
    <EditableTodo
      todo={TEST_TODO}
      update={TodoApp.update}
      remove={TodoApp.remove}
    />
  );
  container = renderedComp.container;
});

describe("editable todo component", function () {
  it("renders without crashing", function () {
    render(<EditableTodo
      todo={TEST_TODO}
      update={TodoApp.update}
      remove={TodoApp.remove}
    />);
  });

  it("shows correct values", function () {
    // check for all required text elements
    expect(renderedComp.getByText("Make Todo list")).toBeInTheDocument();
    expect(renderedComp.getByText("creating todo list")).toBeInTheDocument();
    expect(renderedComp.getByText("(priority: 1)")).toBeInTheDocument();
  });

  it("shows toggle edit and toggle delete buttons", function () {
    // check for required buttons
    expect(renderedComp.getByText("Edit")).toBeInTheDocument();
    expect(renderedComp.getByText("Del")).toBeInTheDocument();

    expect(container.querySelector('.EditableTodo-toggle')).toBeInTheDocument();
    expect(container.querySelector('.EditableTodo-delBtn')).toBeInTheDocument();
  });

  it("shows edit form with correct defaults after clicking edit", function () {
    // click on edit button
    fireEvent.click(container.querySelector('.EditableTodo-toggle'));

    // check initial form values are todo's values
    expect(
      container.querySelector("input[value='Make Todo list']")
    ).toBeInTheDocument();
    expect(
      container.querySelector("#TodoForm-description").innerHTML)
    .toEqual("creating todo list");

    // check that currently selected value is todo's priority
    const select = container.querySelector("#TodoForm-priority");
    expect(select.options[select.selectedIndex].value).toEqual("1");
  });

  it("able to edit todo to have new values for fields", function () {
    // click on edit button, get input field elements
    fireEvent.click(container.querySelector('.EditableTodo-toggle'));
    const titleInput = container.querySelector("#TodoForm-title");
    const descriptionInput = container.querySelector("#TodoForm-description");
    const priorityInput = container.querySelector("#TodoForm-priority");

    // add inputs to modify todo fields
    fireEvent.input(titleInput, { target: { value: "test new title" } });
    fireEvent.input(descriptionInput, { target: { value: "test updated" } });
    fireEvent.input(priorityInput, { target: { value: 2 } });

    // submit form
    fireEvent.click(container.querySelector(".TodoForm-addBtn"));

    // check that updated fields are shown on page
    expect(renderedComp.getByText("test new title")).toBeInTheDocument();
    expect(renderedComp.getByText("test updated")).toBeInTheDocument();
    expect(renderedComp.getByText("(priority: 2)")).toBeInTheDocument();
  });

});