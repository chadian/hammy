import path from 'path';
import lambdaLocal from 'lambda-local';
import requestStub from './stubs/request';

describe('hammy', () => {
  test('it handles the happy path request', () => {
    const request = lambdaLocal.execute({
      event: requestStub,
      lambdaPath: path.resolve(__dirname, '../dist/handler'),
    });

    return request
      .then((result) => {
        const { outputSpeech } = result.response;
        expect(outputSpeech.type).toBe('SSML');
        expect(outputSpeech.ssml).toMatch(/^<speak>.*<\/speak>$/);
      });
  });
});
