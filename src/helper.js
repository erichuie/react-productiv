
const INSPIRATIONAL_QUOTE_URL = 'https://inspo-quotes-api.herokuapp.com';

/** Get a random quote from quotes api
 * No input. Return quote as string.
 */

async function getAPIQuote() {
  console.log('getting api quote')
  const response = await fetch(`${INSPIRATIONAL_QUOTE_URL}/quotes/random`);
  const responseJson = await response.json();
  return responseJson.quote.text;
}

export { getAPIQuote };