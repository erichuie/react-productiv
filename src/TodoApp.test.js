import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

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


describe("TodoApp component", function(){
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={TEST_TODOS} />);
  });

  it("shows no todo components if zero todos", function(){
    const renderedTodo = render(<TodoApp initialTodos={{}} />);
    expect(renderedTodo.getByText("You have no todos.")).toBeInTheDocument();
    expect(renderedTodo.queryAllByText("Top Todo").length).toEqual(0);
    expect(renderedTodo.container.querySelector(".NewTodoForm")).toBeInTheDocument();
  });

  it("shows overall TodoApp", function(){
    const renderedTodo = render(<TodoApp initialTodos={TEST_TODOS} />);
    expect(renderedTodo.container.querySelector(".EditableTodoList")).toBeInTheDocument();
    expect(renderedTodo.queryAllByText("Top Todo").length).toEqual(1);;
    expect(renderedTodo.container.querySelector(".NewTodoForm")).toBeInTheDocument();
  });
});