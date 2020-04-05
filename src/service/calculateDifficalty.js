// @flow

const DEFAULT_PROTECTION_TIME = 10;
// How many times use default protection time. Can't be less than 2 (due log function)
const DIFFICULTY_LEVEL_FOR_START = 3;

export const YOU_PASSED_AMOUNT = 10;

export function calculateTimeAccordingNumberOfTrying(numberOfTrying: number) {
  return numberOfTrying > DIFFICULTY_LEVEL_FOR_START
    ? Math.round(DEFAULT_PROTECTION_TIME / Math.log(numberOfTrying))
    : DEFAULT_PROTECTION_TIME;
}

export function getRatio(step: number) {
  const calculatedValue = 2 * (step / YOU_PASSED_AMOUNT);
  return calculatedValue > 1 ? calculatedValue : 1;
}
