import React from 'react';
import { CashQuantity, dividePayout } from '@lib/util/cashCalculator';
import styled from 'styled-components';
import { flex } from '@lib/util/flex';
import { CurrencyCoin, CurrencyNote } from '@lib/components/Currency';

type PayoutProps = {
  payout?: CashQuantity;
};

const Row = styled.div({
  width: '100%',
  ...flex({ dir: 'row', hAlign: 'center' }),
});
const Column = styled.div({
  width: '25vw',
  ...flex({ dir: 'row', hAlign: 'center' }),
  padding: '8px',
  margin: '12px 0',
});

export const PayoutSlots = ({ payout }: PayoutProps) => {
  const [slot1, slot2, slot3] = dividePayout(payout || {});
  return (
    <Row>
      <Column>
        {Object.entries(slot1).map(([type, quantity]) => (
          <CurrencyNote key={type} type={+type} src={`/currency/DKK_${type}.jpeg`} quantity={quantity} />
        ))}
      </Column>
      <Column>
        {Object.entries(slot2).map(([type, quantity]) => (
          <CurrencyCoin key={type} type={+type} src={`/currency/DKK_${type}.jpeg`} quantity={quantity} />
        ))}
      </Column>
      <Column>
        {Object.entries(slot3).map(([type, quantity]) => (
          <CurrencyCoin key={type} type={+type} src={`/currency/DKK_${type}.jpeg`} quantity={quantity} />
        ))}
      </Column>
    </Row>
  );
};
