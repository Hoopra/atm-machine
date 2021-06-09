import React from 'react';
import { CashQuantity, dividePayout } from '@lib/util/cashCalculator';
import { CurrencyEntity } from '@lib/components/Currency';
import { Column, Row } from './generic/Layout';

type PayoutProps = {
  payout?: CashQuantity;
};

const renderPayoutSlot = (slot: CashQuantity) =>
  Object.entries(slot).map(([type, quantity]) => <CurrencyEntity key={type} type={+type} quantity={quantity} />);

export const PayoutSlots = ({ payout }: PayoutProps) => {
  if (!payout) {
    return (
      <Row style={{ textAlign: 'center' }} $empty>
        Please type withdrawal amount below.
        <br />
        Your payout will appear here.
      </Row>
    );
  }

  const [slot1, slot2, slot3] = dividePayout(payout || {});
  return (
    <Row>
      <Column>{renderPayoutSlot(slot1)}</Column>
      <Column>{renderPayoutSlot(slot2)}</Column>
      <Column>{renderPayoutSlot(slot3)}</Column>
    </Row>
  );
};
