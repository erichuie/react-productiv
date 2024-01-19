import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const testValues = {
  id:1,
  title:"Make Todo list",
  description:"creating todo list",
  priority: 1
};

describe("todo component", function () {
  it("renders without crashing", function () {
    const { id, title, description, priority } = testValues;
    render(<Todo
      id={id}
      title={title}
      description={description}
      priority={priority}/>);
  });

  it("shows correct values", function () {
    const { id, title, description, priority } = testValues;
    const renderedTodo = render(<Todo
      id={id}
      title={title}
      description={description}
      priority={priority}/>);

    // check for all required text elements
    expect(renderedTodo.getByText("Make Todo list")).toBeInTheDocument();
    expect(renderedTodo.getByText("creating todo list")).toBeInTheDocument();
    expect(renderedTodo.getByText("(priority: 1)")).toBeInTheDocument();
  });
});