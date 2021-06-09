import React from 'react';
import { CashQuantity, dividePayout } from '@lib/util/cashCalculator';
import { CurrencyCoin, CurrencyNote } from '@lib/components/Currency';
import { Column, Row } from './generic/Layout';

type PayoutProps = {
  payout?: CashQuantity;
};

export const PayoutSlots = ({ payout }: PayoutProps) => {
  if (!payout) {
    return <Row $empty>Your payout will appear here</Row>;
  }

  const [slot1, slot2, slot3] = dividePayout(payout || {});
  return (
    <Row>
      <Column>
        {Object.entries(slot1).map(([type, quantity]) => (
          <CurrencyNote key={type} type={+type} quantity={quantity} />
        ))}
      </Column>
      <Column>
        {Object.entries(slot2).map(([type, quantity]) => (
          <CurrencyCoin key={type} type={+type} quantity={quantity} />
        ))}
      </Column>
      <Column>
        {Object.entries(slot3).map(([type, quantity]) => (
          <CurrencyCoin key={type} type={+type} quantity={quantity} />
        ))}
      </Column>
    </Row>
  );
};
