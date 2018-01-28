const rand = arr => arr[Math.floor(Math.random() * arr.length)];

export const randomQuoteFromCharacter = data => (character) => {
  const characterQuotes = data.filter(({ speaker }) => speaker === character);
  return rand(characterQuotes).value;
};

export const randomQuote = data => () => rand(data).value;
