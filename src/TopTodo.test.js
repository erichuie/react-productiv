import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

const TEST_TODOS = [
  {
    id: 1,
    title: "Make Todo list",
    description: "creating todo list",
    priority: 1
  },
  {
    id: 2,
    title: "Make Todo list 2",
    description: "creating todo list 2",
    priority: 2
  },
  {
    id: 3,
    title: "Make Todo list 3",
    description: "creating todo list 3",
    priority: 3
  },
];

describe("top todo component", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={TEST_TODOS} />);
  });

  it("shows correct top todo", function () {
    const renderedTodo = render(<TopTodo todos={TEST_TODOS} />);

    // check for all required text elements for top todo
    expect(renderedTodo.getByText("Make Todo list")).toBeInTheDocument();
    expect(renderedTodo.getByText("creating todo list")).toBeInTheDocument();
    expect(renderedTodo.getByText("(priority: 1)")).toBeInTheDocument();
  });
});