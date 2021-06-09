import React, { CSSProperties, ReactNode } from 'react';
import NextImage from 'next/image';
import { coinSizes, noteSizes } from '@lib/constants/cashSize';
import { flex } from '@lib/util/flex';

type CurrencyEntityProps = { quantity: number; type: number; style?: CSSProperties };

type CurrencyWithQuantityProps = CurrencyEntityProps & {
  image: ReactNode;
};
const CurrencyWithQuantity = ({ quantity, type, style, image }: CurrencyWithQuantityProps) => {
  return (
    <div style={{ width: '100%', ...flex({ vAlign: 'center', hAlign: 'center' }), padding: '4px', ...style }}>
      {image}
      &nbsp;x&nbsp;{quantity} (DKK {type})
    </div>
  );
};

export const CurrencyNote = ({ type, ...props }: CurrencyEntityProps) => {
  const size = noteSizes[type];
  const [width, height] = size ?? [100, 50];
  return (
    <CurrencyWithQuantity
      image={<NextImage src={`/currency/DKK_${type}.jpeg`} width={width} height={height} layout='fixed' />}
      type={type}
      {...props}
    />
  );
};

export const CurrencyCoin = ({ type, ...props }: CurrencyEntityProps) => {
  const fixedSize = type ? (coinSizes[type] ?? 10) * 2 : undefined;
  return (
    <CurrencyWithQuantity
      image={
        <NextImage
          src={`/currency/DKK_${type}.jpeg`}
          width={fixedSize ?? 100}
          height={fixedSize ?? 50}
          layout='fixed'
        />
      }
      type={type}
      {...props}
    />
  );
};

export const CurrencyEntity = ({ type, ...props }: CurrencyEntityProps) =>
  +type >= 50 ? (
    <CurrencyNote key={type} type={+type} {...props} />
  ) : (
    <CurrencyCoin key={type} type={+type} {...props} />
  );
