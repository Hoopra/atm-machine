import React, { CSSProperties } from 'react';
import NextImage from 'next/image';
import { coinSizes, noteSizes } from '@lib/constants/cashSize';
import { flex } from '@lib/util/flex';

type CurrencyEntityProps = { quantity: number; type: number; style?: CSSProperties };
export const CurrencyNote = ({ quantity, type, style = {} }: CurrencyEntityProps) => {
  const size = noteSizes[type];
  const [width, height] = size ?? [100, 50];
  return (
    <div style={{ width: '100%', ...flex({ vAlign: 'center', hAlign: 'center' }), padding: '4px', ...style }}>
      <NextImage src={`/currency/DKK_${type}.jpeg`} width={width} height={height} layout='fixed' />
      &nbsp;x&nbsp;{quantity} (DKK {type})
    </div>
  );
};

export const CurrencyCoin = ({ quantity, type, style = {} }: CurrencyEntityProps) => {
  const fixedSize = type ? (coinSizes[type] ?? 10) * 2 : undefined;
  return (
    <div style={{ width: '100%', ...flex({ vAlign: 'center', hAlign: 'center' }), padding: '4px', ...style }}>
      <NextImage src={`/currency/DKK_${type}.jpeg`} width={fixedSize ?? 100} height={fixedSize ?? 50} layout='fixed' />
      &nbsp;x&nbsp;{quantity} (DKK {type})
    </div>
  );
};

export const CurrencyEntity = ({ quantity, type, style }: CurrencyEntityProps) => {
  if (+type >= 50) {
    return <CurrencyNote key={type} type={+type} quantity={quantity} style={style} />;
  }
  return <CurrencyCoin key={type} type={+type} quantity={quantity} style={style} />;
};
