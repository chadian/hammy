import Alexa from 'alexa-sdk';
import data from './quote-data';
import { randomQuote, randomQuoteFromCharacter } from './helpers';

const languageStrings = {
  en: {
    translation: {
      SKILL_NAME: 'Hammy',
      HELP_MESSAGE: 'Hello sir, ask me for a quote from Hamilton.',
      STOP_MESSAGE: 'Goodbye!',
    },
  },
};

const intent = {
  RANDOM_QUOTE: 'RandomQuoteIntent',
  SPECIFIC_SPEAKER: 'SpecificSpeakerQuoteIntent',
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
  [intent.RANDOM_QUOTE]() {
    this.emit(':tell', randomQuote(data)());
  },
  [intent.SPECIFIC_SPEAKER]() {
    const character = this.event.request.intent.slots.Speaker.value;
    this.emit(':tell', randomQuoteFromCharacter(data)(character));
  },
};

// eslint-disable-next-line import/prefer-default-export
export function handler(event, context) {
  const alexa = Alexa.handler(event, context);
  // To enable string internationalization (i18n) features, set a resources object.
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
}
