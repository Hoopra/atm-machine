import { generateRandomIntegerBetween } from '@lib/util/generic';

describe('generateRandomIntegerBetween', () => {
  it(`should generate random numbers between upper and lower bound`, () => {
    for (let i = 0; i < 1e4; i++) {
      const random = generateRandomIntegerBetween(0, 10);
      expect(random).toBeGreaterThanOrEqual(0);
      expect(random).toBeLessThanOrEqual(10);
    }
  });
});
