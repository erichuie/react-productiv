import React from "react";
import { render, fireEvent } from "@testing-library/react";

import * as APIQuote from "./helper"
APIQuote.getAPIQuote = jest.fn();

import QuoteApp from "./QuoteApp";

describe("QuoteApp component", function () {
  it("renders without crashing", function () {
    render(<QuoteApp />);
  });

  it("gets a quote on button click and shows quote", function () {
    const mockedQuote = "This is an inspirational quote.";
    APIQuote.getAPIQuote.mockReturnValue(mockedQuote);

    const renderedQuoteApp = render(<QuoteApp />);
    const container = renderedQuoteApp.container;

    // click on button to generate new quote
    fireEvent.click(container.querySelector(".QuoteApp-button"));

    expect(APIQuote.getAPIQuote).toHaveBeenCalledTimes(1);

    // check that quote is on page
    expect(renderedQuoteApp.getByText(mockedQuote)).toBeInDocument();

  })

});