import 'jest';
import { calculateCashReturn, restockATM } from '@lib/util/cashCalculator';

describe('calculateCashReturn', () => {
  it('should return empty objeect for input value of 0', () => {
    expect(calculateCashReturn(0)).toEqual({});
  });

  it('should determine cash to return for input value', () => {
    expect(calculateCashReturn(578)).toEqual({ 500: 1, 50: 1, 20: 1, 5: 1, 2: 1, 1: 1 });
    expect(calculateCashReturn(1578)).toEqual({
      1000: 1,
      500: 1,
      50: 1,
      20: 1,
      5: 1,
      2: 1,
      1: 1,
    });
    expect(calculateCashReturn(2642)).toEqual({
      1000: 2,
      500: 1,
      100: 1,
      20: 2,
      2: 1,
    });
  });

  it('should limit quantities by available stock', () => {
    expect(calculateCashReturn(500)).toEqual({ 500: 1 });
    expect(calculateCashReturn(500, { 200: 2, 100: 5 })).toEqual({ 200: 2, 100: 1 });
    expect(calculateCashReturn(500, { 100: 5 })).toEqual({ 100: 5 });
  });

  it('should return undefined if available stock is insufficient', () => {
    expect(calculateCashReturn(500)).toEqual({ 500: 1 });
    expect(calculateCashReturn(500, {})).toBeUndefined();
  });
});

describe('restockATM', () => {
  it('should return a random stock', () => {
    const atmStock = restockATM();
    expect(Object.keys(atmStock)).toEqual(['1', '2', '5', '10', '20', '50', '100', '200', '500', '1000']);
    for (const stock of Object.values(atmStock)) {
      expect(stock).toBeGreaterThanOrEqual(0);
      expect(stock).toBeLessThanOrEqual(100);
    }
  });
});
