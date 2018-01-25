module.exports = (speaker) => {
  return {
    "session": {
      "new": true,
      "sessionId": "SessionId",
      "application": {
        "applicationId": "amzn1.ask.specificrequesttestrun"
      },
      "attributes": {},
      "user": {
        "userId": "amzn1.ask.account"
      }
    },
    "request": {
      "type": "IntentRequest",
      "requestId": "EdwRequestId",
      "intent": {
        "name": "SpecificSpeakerQuoteIntent",
        "slots": {
          "Speaker": {
            "name": "Speaker",
            "value": speaker
          }
        }
      },
      "locale": "en-US",
      "timestamp": "2018-01-25T07:19:40Z"
    },
    "context": {
      "AudioPlayer": {
        "playerActivity": "IDLE"
      },
      "System": {
        "application": {
          "applicationId": "amzn1.ask.skill"
        },
        "user": {
          "userId": "amzn1.ask.account"
        },
        "device": {
          "supportedInterfaces": {}
        }
      }
    },
    "version": "1.0"
  }
};
