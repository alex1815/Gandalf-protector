// @flow
import getShift, { getCheckedShift } from "./getShift";

test("Shift should be inside the range", () => {
    const windowSize = 10;
    const shapeSize = 1;

  const res = getShift(windowSize, shapeSize);

  expect(res > 0);
  expect(res < windowSize);
});

test("Shift should moved value inside if generated value too big", () => {
    const windowSize = 8;
    const shapeSize = 2;
    const rawShift = 7;
    const expected = 6;

    expect(getCheckedShift(windowSize, shapeSize, rawShift) === expected);
});

test("Shift should moved value inside if generated value too small", () => {
    const windowSize = 8;
    const shapeSize = 2;
    const rawShift = 1;
    const expected = 3;

    expect(getCheckedShift(windowSize, shapeSize, rawShift) === expected);
});
