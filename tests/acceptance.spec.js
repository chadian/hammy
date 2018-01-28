import path from 'path';
import lambdaLocal from 'lambda-local';
import randomRequestStub from './stubs/random-request';
import specificSpeakerRequest from './stubs/specific-speaker-request';
import quoteData, { HAMILTON_QUOTES } from '../src/quote-data';

const lambdaPath = path.resolve(__dirname, '../dist/handler');
const ssmlify = quote => `<speak> ${quote} </speak>`;
const requestWith = event => lambdaLocal.execute({ event, lambdaPath });

describe('hammy', async () => {
  test('it handles the random quote intent', async () => {
    const result = await requestWith(randomRequestStub);

    const { outputSpeech } = result.response;
    expect(outputSpeech.type).toBe('SSML');

    const ssmlQuotes = quoteData.map(quote => ssmlify(quote.value));
    expect(ssmlQuotes).toContain(outputSpeech.ssml);
  });

  test('it handles the specific character quote intent', async () => {
    const result = await requestWith(specificSpeakerRequest('ALEXANDER_HAMILTON'));

    const { outputSpeech } = result.response;
    expect(outputSpeech.type).toBe('SSML');

    const hamiltonSsmlQuotes = HAMILTON_QUOTES.map(quote => ssmlify(quote.value));
    expect(hamiltonSsmlQuotes).toContain(outputSpeech.ssml);
  });
});
