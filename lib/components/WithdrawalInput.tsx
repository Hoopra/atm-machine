import { ChangeEvent, useState, KeyboardEvent } from 'react';
import { Button } from '@lib/components/generic/Button';
import styled from 'styled-components';

const Input = styled.input({
  padding: '4px',
});

type WithdrawalInputProps = {
  onWithdraw?: (value: number) => void;
};

export const WithdrawalInput = ({ onWithdraw }: WithdrawalInputProps) => {
  const [withdrawal, setWithdrawal] = useState<number>();

  const onUserInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setWithdrawal(!+value ? undefined : +value);
  };

  const onClick = () => {
    if (!withdrawal) {
      return;
    }
    onWithdraw?.(withdrawal);
  };

  const onEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <>
      <Input value={withdrawal || ``} onChange={onUserInput} onKeyUp={onEnterKey} type='number' />
      <Button onClick={onClick}>Withdraw</Button>
    </>
  );
};
