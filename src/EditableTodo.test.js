import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo"


const TEST_TODO = {
  id:1,
  title:"Make Todo list",
  description:"creating todo list",
  priority: 1
};

let renderedComp;
let container;
beforeEach(function () {
  renderedComp = render(
    <EditableTodo
      todo={TEST_TODO}
      update='TBD'
      remove='TBD'
    />
  );
  container = renderedComp.container;
})

describe("editable todo component", function () {
  it("renders without crashing", function () {
    render(<EditableTodo
      todo={TEST_TODO}
      update='TBD'
      remove='TBD'
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



});