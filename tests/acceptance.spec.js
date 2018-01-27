const path = require('path');
const lambdaLocal = require('lambda-local');

const randomRequestStub = require('./stubs/random-request');
const specificSpeakerRequest = require("./stubs/specific-speaker-request");
const lambdaPath = path.resolve(__dirname, "../handler");
const quoteData = require("../quoteData");

const ssmlify = quote => `<speak> ${quote} </speak>`;

const requestWith = event => lambdaLocal.execute({ event , lambdaPath });

describe('hammy', async () => {
  test('it handles the random quote intent', async () => {
    const result = await requestWith(randomRequestStub)

    const outputSpeech = result.response.outputSpeech;
    expect(outputSpeech.type).toBe("SSML");

    const ssmlQuotes = quoteData.map(quote => ssmlify(quote.value));
    expect(ssmlQuotes).toContain(outputSpeech.ssml);
  });

  test("it handles the specific character quote intent", async () => {
    const result = await requestWith(specificSpeakerRequest('ALEXANDER_HAMILTON'));

    const outputSpeech = result.response.outputSpeech;
    expect(outputSpeech.type).toBe('SSML');

    const hamiltonSsmlQuotes = quoteData
      .filter(quote => quote.speaker === "ALEXANDER_HAMILTON")
      .map(quote => ssmlify(quote.value));

    expect(hamiltonSsmlQuotes).toContain(outputSpeech.ssml);
  });
});
