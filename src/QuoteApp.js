import { useState } from "react";
import Quote from "./Quote";

const  INSPIRATIONAL_QUOTE_URL = 'https://inspo-quotes-api.herokuapp.com';

function QuoteApp() {
  const [quote, setQuote] = useState("");

  async function getAPIQuote(){
    const response = await fetch(`${INSPIRATIONAL_QUOTE_URL}/quotes/random`);
    // console.log("response is",await response.json());
    return await response.json();
  }

  async function getNewQuote(){
    // console.log("calling getAPIQuote", await getAPIQuote());
    // const apiQuote = await getAPIQuote();
    setQuote(
      async () => (await getAPIQuote()).quote.text
    )
  }

  return (
    <div>
      <Quote quote={quote} />
      <button onClick={getNewQuote}>Click for quote!</button>
    </div>);
}

export default QuoteApp;