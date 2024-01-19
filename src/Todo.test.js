import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const TEST_TODO = {
  id: 1,
  title: "Make Todo list",
  description: "creating todo list",
  priority: 1
};

describe("todo component", function () {
  it("renders without crashing", function () {
    render(<Todo todo={TEST_TODO} />);
  });

  it("shows correct values", function () {
    const renderedTodo = render(<Todo todo={TEST_TODO} />);

    // check for all required text elements
    expect(renderedTodo.getByText("Make Todo list")).toBeInTheDocument();
    expect(renderedTodo.getByText("creating todo list")).toBeInTheDocument();
    expect(renderedTodo.getByText("(priority: 1)")).toBeInTheDocument();
  });
});