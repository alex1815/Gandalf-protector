// @flow

const getShift = (windowSizeValue: number, sizeOfShape: number) => {
  // with approach we always will have value in range from 0 to max size of window
  let uncheckedShift = Math.round(windowSizeValue * Math.random());
  return getCheckedShift(windowSizeValue, sizeOfShape, uncheckedShift);
};

export const getCheckedShift = (windowSizeValue: number, shapeSize: number, shift: number) => {
  // we suppose the size of screen not less than a shape
  if (shift + shapeSize > windowSizeValue) {
    return shift - shapeSize;
  } else if (shift - shapeSize < 0) {
    return shift + shapeSize;
  }
  return shift;
};

export default getShift;
