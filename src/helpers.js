const data = require('./quoteData');

const rand = arr => arr[Math.floor(Math.random() * arr.length)];

function randomQuoteFromCharacter(character) {
  const characterQuotes = data.filter(({ speaker }) => speaker === character);
  return rand(characterQuotes).quote;
}

function randomQuote() {
  return rand(data).quote;
}

module.exports = {
  randomQuote,
  randomQuoteFromCharacter
}
