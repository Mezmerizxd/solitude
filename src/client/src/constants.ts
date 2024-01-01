export const APP_NAME = 'Solitude';

export const navigation_items = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Courses Completed',
    to: '/courses',
  },
  {
    name: 'Projects',
    to: '/projects',
  },
  {
    name: 'How Did I Learn?',
    to: '/how',
  },
  {
    name: 'Components',
    to: '/components',
  },
].filter(Boolean) as {
  name: string;
  to: string;
  customUrl?: boolean;
}[];

export const home_hero_quotes: { quote: string; author: string }[] = [
  {
    quote: 'Man is sometimes extraordinarily, passionately, in love with suffering.',
    author: 'Fyodor Dostoevsky',
  },
  {
    quote:
      'He who fights with monsters should be careful lest he thereby become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.',
    author: 'Friedrich Nietzsche',
  },
  {
    quote: 'Life is a constant process of dying.',
    author: 'Arthur Schopenhauer',
  },
  {
    quote: "What does your conscience say? — 'You should become the person you are.'",
    author: 'Friedrich Nietzsche',
  },
  {
    quote:
      "Everything is nonsense that endures, except the infinite; but it's nothing to me, because I'm part of the contingent.",
    author: 'Alexander Pushkin',
  },
  {
    quote: 'Random Quote.',
    author: 'Random Author',
  },
  {
    quote: 'Random Quote.',
    author: 'Random Author',
  },
  {
    quote: 'Random Quote.',
    author: 'Random Author',
  },
  {
    quote: 'Random Quote.',
    author: 'Random Author',
  },
  {
    quote: 'Random Quote.',
    author: 'Random Author',
  },
  {
    quote: 'Random Quote.',
    author: 'Random Author',
  },
];
