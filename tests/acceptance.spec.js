const path = require('path');
const lambdaLocal = require('lambda-local');

const requestPayloadStub = require('./stubs/request');
jest.mock('../quotes');

describe('hammy', () => {
  test('it handles the happy path request', (done) => {
    afterEach(() => {
      jest.unmock('../quotes');
    });

    const request = lambdaLocal.execute({
      event: requestPayloadStub,
      lambdaPath: path.resolve(__dirname, '../handler')
    })

    return request
      .then(result => {
        expect(result.response.outputSpeech.ssml).toBe(
          '<speak> If you stand for nothing Burr, what will you fall for? </speak>'
        );
      })
      .then(done);
  });
});
