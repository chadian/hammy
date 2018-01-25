const Alexa = require('alexa-sdk');
const { randomQuote } = require('./helpers');

const languageStrings = {
  'en': {
    translation: {
      SKILL_NAME: 'Hammy',
      HELP_MESSAGE: 'Hello sir, ask me for quote from Hamilton.',
      STOP_MESSAGE: 'Goodbye!',
    },
  }
};

const handlers = {
  'LaunchRequest': function () {
    this.emit('GetQuote');
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = this.t('HELP_MESSAGE');
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'RandomQuoteIntent': function () {
    this.emit(':tell', randomQuote());
  },
  'SpecificSpeakerQuoteIntent': function () {
    this.emit(':tell', randomQuote());
  }
};

exports.handler = function (event, context) {
  const alexa = Alexa.handler(event, context);
  // To enable string internationalization (i18n) features, set a resources object.
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
