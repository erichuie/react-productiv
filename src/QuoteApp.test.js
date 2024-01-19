import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";

import * as APIQuote from "./helper"
APIQuote.getAPIQuote = jest.fn();

import QuoteApp from "./QuoteApp";

describe("QuoteApp component", function () {
  it("renders without crashing", function () {
    render(<QuoteApp />);
  });

  it("gets a quote on button click and shows quote", async function () {
    const mockedQuote = "This is an inspirational quote.";
    APIQuote.getAPIQuote.mockReturnValue(mockedQuote);

    const renderedQuoteApp = render(<QuoteApp />);
    const container = renderedQuoteApp.container;

    // click on button to generate new quote
    fireEvent.click(container.querySelector(".QuoteApp-button"));

    expect(APIQuote.getAPIQuote).toHaveBeenCalledTimes(1);

    // check that quote is on page
    expect(await renderedQuoteApp.getByText(mockedQuote)).toBeInDocument();

  })

});