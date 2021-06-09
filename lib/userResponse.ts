import { generateRandomIntegerBetween } from './util/generic';

const responses = [
  'Thank you very much. Have a nice day!',
  'You might just be our best customer!',
  `It's been great doing business with you!`,
  `We enjoy having you with us.`,
  `Our ATM's are chock-full of security - just try and break in.`,
  `Soon there will be a World's Greatest ATM on every street corner.`,
  `Thank you for still using cash.`,
  `We are happy to serve you!`,
];

export const generateResponse = () => {
  const index = generateRandomIntegerBetween(0, responses.length - 1);
  return responses[index];
};
