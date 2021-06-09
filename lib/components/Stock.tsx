import { CashQuantity } from '@lib/util/cashCalculator';
import React, { useState } from 'react';
import { CurrencyEntity } from './Currency';
import { Button } from './generic/Button';

type CurrentStockProps = {
  stock: CashQuantity;
};
export const CurrentStock = ({ stock }: CurrentStockProps) => {
  const [showStock, setShowStock] = useState<boolean>();

  return (
    <>
      <Button onClick={() => setShowStock(!showStock)}>{showStock ? 'Hide' : 'Show'} current stock</Button>
      {showStock && (
        <div style={{ margin: '32px' }}>
          {Object.entries(stock).map(([type, quantity]) => (
            <CurrencyEntity key={type} type={+type} quantity={quantity} style={{ padding: '8px' }} />
          ))}
        </div>
      )}
    </>
  );
};
