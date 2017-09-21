/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            QUOTES: [
              `There’s a million things I haven’t done, just you wait`,
              `If you stand for nothing, Burr, what’ll you fall for?`,
              `I’m past patiently waitin’. I’m passionately smashin’ every expectation. Every action’s an act of creation! I’m laughin’ in the face of casualties and sorrow. For the first time, I’m thinkin’ past tomorrow`,
              `I will send a fully armed battalion to remind you of my love! `,
              `Why do you write like you’re writing out of time?`,
              `Your debts are paid cuz you don’t pay for labor, “We plant seeds in the South. We create.” Yeah, keep ranting. We know who’s really doing the planting`,
              `Everyone shall sit under their own vine and fig tree, And no one shall make them afraid.`,
              `Legacy. What is a legacy? It’s planting seeds in a garden you never get to see`,
            ],
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
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
