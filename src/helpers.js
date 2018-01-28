import data from './quoteData';

const rand = arr => arr[Math.floor(Math.random() * arr.length)];

export function randomQuoteFromCharacter(character) {
  const characterQuotes = data.filter(({ speaker }) => speaker === character);
  return rand(characterQuotes).value;
}

export function randomQuote() {
  return rand(data).value;
}
