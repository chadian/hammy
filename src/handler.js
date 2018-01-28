const Alexa = require('alexa-sdk');
const { randomQuote } = require('./helpers');

const languageStrings = {
  en: {
    translation: {
      SKILL_NAME: 'Hammy',
      HELP_MESSAGE: 'Hello sir, ask me for quote from Hamilton.',
      STOP_MESSAGE: 'Goodbye!',
    },
  },
};

const handlers = {
  LaunchRequest() {
    this.emit('GetQuote');
  },
  'AMAZON.HelpIntent': function HelpIntent() {
    const speechOutput = this.t('HELP_MESSAGE');
    this.emit(':ask', speechOutput);
  },
  'AMAZON.CancelIntent': function CancelIntent() {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'AMAZON.StopIntent': function StopIntent() {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  RandomQuoteIntent() {
    this.emit(':tell', randomQuote());
  },
};

exports.handler = function handler(event, context) {
  const alexa = Alexa.handler(event, context);
  // To enable string internationalization (i18n) features, set a resources object.
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
