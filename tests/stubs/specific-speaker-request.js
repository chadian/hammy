export default speakerId => ({
  session: {
    new: true,
    sessionId: 'SessionId',
    application: {
      applicationId: 'amzn1.ask.specificrequesttestrun',
    },
    attributes: {},
    user: {
      userId: 'amzn1.ask.account',
    },
  },
  request: {
    type: 'IntentRequest',
    requestId: 'EdwRequestId',
    intent: {
      name: 'SpecificSpeakerQuoteIntent',
      confirmationStatus: 'NONE',
      slots: {
        Speaker: {
          name: 'Speaker',
          value: 'the Washington',
          resolutions: {
            resolutionsPerAuthority: [
              {
                authority:
                    'amzn1.er-authority.echo-sdk.amzn1.ask.skill.a8272edd-19a6-40b8-b233-3ca6e980b98d.Speaker',
                status: {
                  code: 'ER_SUCCESS_MATCH',
                },
                values: [
                  {
                    value: {
                      name: speakerId,
                      id: speakerId,
                    },
                  },
                ],
              },
            ],
          },
          confirmationStatus: 'NONE',
        },
      },
    },
    locale: 'en-US',
    timestamp: '2018-01-25T07:19:40Z',
  },
  context: {
    AudioPlayer: {
      playerActivity: 'IDLE',
    },
    System: {
      application: {
        applicationId: 'amzn1.ask.skill',
      },
      user: {
        userId: 'amzn1.ask.account',
      },
      device: {
        supportedInterfaces: {},
      },
    },
  },
  version: '1.0',
});
