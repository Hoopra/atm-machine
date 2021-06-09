import { ChangeEvent, useState, KeyboardEvent } from 'react';
import styled from 'styled-components';

const Input = styled.input({
  padding: '4px',
});

const Button = styled.button({
  padding: '4px',
  background: 'none',
  border: '1px solid grey',
  margin: '8px 0',

  ':hover': { background: 'lightblue' },
});

type WithdrawalInputProps = {
  onWithdraw?: (value: number) => void;
};

export const WithdrawalInput = ({ onWithdraw }: WithdrawalInputProps) => {
  const [withdrawal, setWithdrawal] = useState<number>();
  const [showError, setShowError] = useState(false);

  const onUserInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setWithdrawal(!+value ? undefined : +value);
  };

  const onClick = () => {
    if (!withdrawal) {
      setShowError(true);
      return;
    }
    setShowError(false);
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
      {showError && <div>Error</div>}
    </>
  );
};
