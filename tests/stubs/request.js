module.exports = {
  "session": {
    "new": false,
    "sessionId": "SessionId",
    "application": {
      "applicationId": "amzn1.ask.skill"
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
      "name": "RandomQuoteIntent",
      "slots": {}
    },
    "locale": "en-US",
    "timestamp": "2017-09-30T22:07:47Z"
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
};
