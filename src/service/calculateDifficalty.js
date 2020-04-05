// @flow

const DEFAULT_PROTECTION_TIME = 3;
// How many times use default protection time. Can't be less than 2 (due log function)
const DIFFICULTY_LEVEL_FOR_START = 3;

export function calculateTimeAccordingNumberOfTrying(numberOfTrying: number) {
  return numberOfTrying > DIFFICULTY_LEVEL_FOR_START
    ? Math.round(DEFAULT_PROTECTION_TIME / Math.log(numberOfTrying))
    : DEFAULT_PROTECTION_TIME;
}

function getFixedRatio({
  maxWidth = 640,
  maxHeight = 320,
  srcWidth = 320,
  srcHeight = 160
}: {
  srcWidth?: number,
  srcHeight?: number,
  maxHeight?: number,
  maxWidth?: number
}) {
  return Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
}

export function getRatio() {
  return getFixedRatio();
}
