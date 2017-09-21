'use strict';

const Alexa = require('alexa-sdk');
const quotes = require('./quotes');

const languageStrings = {
  'en': {
    translation: {
      QUOTES: quotes,
      SKILL_NAME: 'Hammy',
      HELP_MESSAGE: 'You can say tell me a space fact, or, you can say exit... What can I help you with?',
      HELP_REPROMPT: 'What can I help you with?',
      STOP_MESSAGE: 'Goodbye!',
    },
  }
};

const handlers = {
  'LaunchRequest': function () {
    this.emit('GetQuote');
  },
  'RandomQuoteIntent': function () {
    this.emit('GetQuote');
  },
  'GetQuote': function () {
    const quoteArr = this.t('QUOTES');
    const quoteIndex = Math.floor(Math.random() * quoteArr.length);
    const randomQuote = quoteArr[quoteIndex];

    this.emit(':tell', randomQuote);
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = this.t('HELP_MESSAGE');
    const reprompt = this.t('HELP_MESSAGE');
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'RandomQuoteIntent': function () {
    this.emit('GetQuote');
  }
};

exports.handler = function (event, context) {
  const alexa = Alexa.handler(event, context);
  // To enable string internationalization (i18n) features, set a resources object.
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
