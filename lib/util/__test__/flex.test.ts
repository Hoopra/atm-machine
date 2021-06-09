import { flex, defaultFlex } from '@lib/util/flex';
import { propertiesToCSS } from '@lib/util/common';
import { flexCSS } from '@lib/util/flex';

const defaultFlexProperties = { display: 'flex', flexFlow: 'row wrap' };

describe('flex', () => {
  it(`should return default flex properties for 'default' preset`, () => {
    expect(flex()).toEqual(defaultFlexProperties);
    expect(flex({})).toEqual(defaultFlexProperties);
    expect(flex({ preset: 'default' })).toEqual(defaultFlexProperties);
    expect(defaultFlex()).toEqual(defaultFlexProperties);
  });

  it(`should return default flex properties with custom options`, () => {
    expect(flex({ preset: 'default', wrap: false })).toEqual({
      ...defaultFlexProperties,
      flexFlow: 'row nowrap',
    });
  });
});

describe('flexCSS', () => {
  it(`should return css for 'default' preset`, () => {
    expect(flexCSS()).toEqual(propertiesToCSS(defaultFlexProperties));
  });
});
