const HAMILTON =    'ALEXANDER_HAMILTON';
const BURR =        'AARON_BURR';
const WASHINGTON =  'GEORGE_WASHINGTON';
const KING_GEORGE = 'KING_GEORGE';

const addSpeaker = speaker => obj => Object.assign(obj,
  { speaker });

const KING_GEORGE_QUOTES = [
  { quote: `I will send a fully armed battalion to remind you of my love!` },
].map(addSpeaker(KING_GEORGE));

const BURR_QUOTES = [
  { quote: `Why do you write like you're writing out of time?` },
].map(addSpeaker(BURR));

const WASHINGTON_QUOTES = [
  { quote: `Everyone shall sit under their own vine and fig tree, And no one shall make them afraid.` },
  { quote: `I know that we can win, I know that greatness lies in you. But remember from here on in, history has its eyes on you.` },
].map(addSpeaker(WASHINGTON));

const HAMILTON_QUOTES = [
  { quote: `There's a million things I haven't done, just you wait` },
  { quote: `If you stand for nothing, Burr, what'll you fall for?` },
  { quote: `I'm past patiently waitin. I'm passionately smashin every expectation. Every action's an act of creation! I'm laughin in the face of casualties and sorrow. For the first time, I'm thinkin past tomorrow` },
  { quote: `Your debts are paid cuz you don't pay for labor, “We plant seeds in the South. We create.” Yeah, keep ranting. We know who's really doing the planting` },
  { quote: `Legacy. What is a legacy? It's planting seeds in a garden you never get to see` },
  { quote: `I’m just like my country.` },
  { quote: `I’m young, scrappy, and hungry, and I am not throwing away my shot.` },
  { quote: `I never had a group of friends before, I promise that I’ll make y’all proud.` },
  { quote: `Burr I’d rather be divisive than indecisive. Drop the niceties.` }
].map(addSpeaker(HAMILTON));

const allQuotes = [].concat(
  HAMILTON_QUOTES,
  BURR_QUOTES,
  WASHINGTON_QUOTES,
  KING_GEORGE_QUOTES
);

module.exports = allQuotes;
