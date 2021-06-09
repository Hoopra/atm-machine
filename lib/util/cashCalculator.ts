import omit from 'lodash.omit';
import { generateRandomIntegerBetween } from '@lib/util/generic';

export type CashQuantity = Record<number, number>;
export type PayoutDivision = [CashQuantity, CashQuantity, CashQuantity];

const noteTypes = [1000, 500, 200, 100, 50];
const coinTypes = [20, 5, 2];
const smallCoinTypes = [10, 1];
const cashTypes = noteTypes
  .concat(coinTypes)
  .concat(smallCoinTypes)
  .sort((a, b) => b - a);

const calculateQuantityForType = (toPay: number, type: number, maxQuantity?: number): [number, number] => {
  const baseQuantity = Math.floor(toPay / type);
  const quantity = maxQuantity === undefined ? baseQuantity : Math.min(maxQuantity, baseQuantity);
  return [quantity, toPay - quantity * type];
};

export const calculateCashReturn = (toPay: number, stock?: CashQuantity): CashQuantity | undefined => {
  const cashReturn = cashTypes.reduce(
    (specification, type) => {
      if (!specification.remainder) {
        return specification;
      }
      const maxQuantity = stock ? stock[type] ?? 0 : undefined;
      const [quantity, remainder] = calculateQuantityForType(specification.remainder, type, maxQuantity);
      return {
        ...specification,
        ...(quantity ? { [type]: quantity } : {}),
        remainder,
      };
    },
    { remainder: toPay } as CashQuantity & {
      remainder: number;
    }
  );
  return cashReturn.remainder ? undefined : omit(cashReturn, ['remainder']);
};

export const restockATM = () =>
  cashTypes.reduce(
    (acc, type) => ({
      ...acc,
      [type]: generateRandomIntegerBetween(0, 100),
    }),
    {} as CashQuantity
  );

export const withdrawFromStock = (stock: CashQuantity, payout: CashQuantity): CashQuantity =>
  Object.entries(payout).reduce((newStock, [type, quantity]) => {
    const remaining = stock[+type] || 0;
    const newQuantity = remaining - quantity;
    if (newQuantity < 0) {
      throw Error(`tried to withdraw ${quantity} of type ${type} but only ${remaining} remain`);
    }
    return {
      ...newStock,
      [type]: newQuantity,
    };
  }, stock);

export const dividePayout = (payout: CashQuantity): PayoutDivision =>
  Object.entries(payout).reduce(
    (divisions, [type, quantity]) => {
      const [slot1, slot2, slot3] = divisions;
      const entry = { [type]: quantity };
      if (noteTypes.includes(+type)) {
        return [{ ...slot1, ...entry }, slot2, slot3];
      }
      if (coinTypes.includes(+type)) {
        return [slot1, { ...slot2, ...entry }, slot3];
      }
      return [slot1, slot2, { ...slot3, ...entry }];
    },
    [{}, {}, {}] as PayoutDivision
  );
