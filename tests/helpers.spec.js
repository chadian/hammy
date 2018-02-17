import { randomQuoteFromCharacter, randomQuote } from '../src/helpers';

const data = [{
  speaker: 'CAT',
  value: 'meow',
}, {
  speaker: 'DOG',
  value: 'ruff',
}, {
  speaker: 'FOX',
  value: 'Ring-ding-ding-ding-dingeringeding',
}];

describe('helpers', () => {
  describe('randomQuote', () => {
    test('it returns a random quote', () => {
      const result = randomQuote(data)();
      expect(data.map(quote => quote.value)).toContain(result);
    });
  });

  describe('randomQuoteFromCharacter', () => {
    test('it returns a quote from a given character', () => {
      const result = randomQuoteFromCharacter(data)('CAT');
      expect(result).toEqual('meow');
    });
  });
});
