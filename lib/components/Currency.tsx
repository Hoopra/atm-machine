import React from 'react';
import NextImage from 'next/image';
import { coinSizes, noteSizes } from '@lib/constants/cashSize';
import { flex } from '@lib/util/flex';

type CurrencyNoteProps = { src: string; quantity: number; type: number };
export const CurrencyNote = ({ src, quantity, type }: CurrencyNoteProps) => {
  const size = noteSizes[type];
  const [width, height] = size ?? [100, 50];
  return (
    <div style={{ width: '100%', ...flex({ vAlign: 'center', hAlign: 'center' }), padding: '4px' }}>
      <NextImage src={src} width={width} height={height} layout='fixed' />
      &nbsp;x&nbsp;{quantity}
    </div>
  );
};

type CurrencyCoinProps = { src: string; quantity: number; type: number };
export const CurrencyCoin = ({ src, quantity, type }: CurrencyCoinProps) => {
  const fixedSize = type ? (coinSizes[type] ?? 10) * 2 : undefined;
  return (
    <div style={{ width: '100%', ...flex({ vAlign: 'center', hAlign: 'center' }), padding: '4px' }}>
      <NextImage src={src} width={fixedSize ?? 100} height={fixedSize ?? 50} layout='fixed' />
      &nbsp;x&nbsp;{quantity}
    </div>
  );
};
