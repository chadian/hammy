const data = require('./quoteData');

const rand = arr => arr[Math.floor(Math.random() * arr.length)];

function randomQuoteFromCharacter(character) {
  const characterQuotes = data.filter(({ speaker }) => speaker === character);
  return rand(characterQuotes).value;
}

function randomQuote() {
  return rand(data).value;
}

module.exports = {
  randomQuote,
  randomQuoteFromCharacter
}
