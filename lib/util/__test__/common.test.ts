import { applyWhereDefined, propertiesToCSS } from '@lib/util/common';

describe('propertiesToCSS', () => {
  it('should convert react properties to css', () => {
    expect(propertiesToCSS({ WebkitBoxShadow: '1px 1px' })).toEqual(`-webkit-box-shadow: 1px 1px;`);
  });
});

describe('applyWhereDefined', () => {
  it('should return a copy of first input including defined values from second input', () => {
    expect(applyWhereDefined({}, {})).toEqual({});
    expect(applyWhereDefined({ hello: 123 }, {})).toEqual({ hello: 123 });
    expect(applyWhereDefined({ hello: 123 }, { hello: undefined })).toEqual({ hello: 123 });
    expect(applyWhereDefined({ hello: 123, you: 123 }, { hello: undefined, you: 234 })).toEqual({
      hello: 123,
      you: 234,
    });
  });
});
