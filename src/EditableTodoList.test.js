import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

const TEST_TODO_1 = {
  id: 1,
  title: "Make Todo list",
  description: "creating todo list",
  priority: 1
};

const TEST_TODO_2 = {
  id: 2,
  title: "Do the dishes",
  description: "clean plates",
  priority: 2
};

const todosList = [TEST_TODO_1, TEST_TODO_2];

let renderedComp;
let container;
beforeEach(function () {
  renderedComp = render(
    <EditableTodoList
      todos={todosList}
      update='TBD'
      remove='TBD'
    />
  );
  container = renderedComp.container;
});

describe("EditableTodoList Component tests", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList
      todos={todosList}
      update='TBD'
      remove='TBD'
    />);
  });

  it("shows multiple todo components", function () {
    expect(renderedComp.getByText("Make Todo list")).toBeInTheDocument();
    expect(renderedComp.getByText("creating todo list")).toBeInTheDocument();
    expect(renderedComp.getByText("(priority: 1)")).toBeInTheDocument();

    expect(renderedComp.getByText("Do the dishes")).toBeInTheDocument();
    expect(renderedComp.getByText("clean plates")).toBeInTheDocument();
    expect(renderedComp.getByText("(priority: 2)")).toBeInTheDocument();
  });

  it("shows toggle edit and toggle delete buttons", function () {
    // check for required buttons
    expect(renderedComp.getAllByText("Edit").length).toEqual(2);
    expect(renderedComp.getAllByText("Del").length).toEqual(2);

    expect(container.querySelectorAll('.EditableTodo-toggle').length)
      .toEqual(2);
    expect(container.querySelectorAll('.EditableTodo-delBtn').length)
      .toEqual(2);
  });
});