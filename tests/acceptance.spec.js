const path = require('path');
const lambdaLocal = require('lambda-local');

const requestStub = require('./stubs/request');

describe('hammy', () => {
  test('it handles the happy path request', () => {
    const request = lambdaLocal.execute({
      event: requestStub,
      lambdaPath: path.resolve(__dirname, '../handler')
    })

    return request
      .then(result => {
        const outputSpeech = result.response.outputSpeech;
        expect(outputSpeech.type).toBe('SSML');
        expect(outputSpeech.ssml).toMatch(/^<speak>.*<\/speak>$/);
      });
  });
});
