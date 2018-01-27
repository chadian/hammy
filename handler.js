const Alexa = require('alexa-sdk');
const { randomQuote, randomQuoteFromCharacter } = require("./helpers");

const languageStrings = {
  'en': {
    translation: {
      SKILL_NAME: 'Hammy',
      HELP_MESSAGE: 'Hello sir, ask me for a quote from Hamilton.',
      STOP_MESSAGE: 'Goodbye!',
    },
  }
};

const intent = {
  RANDOM_QUOTE: "RandomQuoteIntent",
  SPECIFIC_SPEAKER: "SpecificSpeakerQuoteIntent"
};

const handlers = {
  'LaunchRequest': function() {
    this.emit('GetQuote');
  },
  'AMAZON.HelpIntent': function() {
    const speechOutput = this.t('HELP_MESSAGE');
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function() {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'AMAZON.StopIntent': function() {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  [intent.RANDOM_QUOTE]: function() {
    this.emit(':tell', randomQuote());
  },
  [intent.SPECIFIC_SPEAKER]: function() {
    const character = this.event.request.intent.slots.Speaker.value;
    this.emit(":tell", randomQuoteFromCharacter(character));
  }
};

exports.handler = function (event, context) {
  const alexa = Alexa.handler(event, context);
  // To enable string internationalization (i18n) features, set a resources object.
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
