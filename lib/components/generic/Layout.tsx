import { flex } from '@lib/util/flex';
import styled from 'styled-components';

export const Row = styled.div<{ $empty?: boolean }>(({ $empty }) => ({
  width: '100%',
  minHeight: '320px',
  ...flex({ dir: 'row', hAlign: 'center', vAlign: $empty ? 'center' : undefined }),
}));

export const Column = styled.div({
  width: '30vw',
  ...flex({ dir: 'row', hAlign: 'center' }),
  padding: '8px',
  margin: '12px 0',
});
