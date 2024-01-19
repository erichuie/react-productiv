import { useState } from "react";
import "./QuoteApp.css";
import Quote from "./Quote";

import { getAPIQuote } from "./helper";


/** Component to get an inspirational quote
 *
 * Props:
 * - None
 *
 * States:
 * - quote
 */

function QuoteApp() {
  const [quote, setQuote] = useState("");

  async function getNewQuote() {
    console.log("getting new quote")
    const newQuote = await getAPIQuote();
    console.log('setting new quote to', newQuote);
    setQuote(newQuote);
    console.log("here")
  }

  return (
    <div className="QuoteApp">
      <Quote quote={quote} />
      <button onClick={getNewQuote} className="QuoteApp-button">
        Click for quote!
      </button>
    </div>);
}

export default QuoteApp;
