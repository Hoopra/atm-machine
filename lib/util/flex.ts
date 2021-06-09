import { CSSProperties } from 'react';

import { applyWhereDefined } from '@lib/util/common';
import { propertiesToCSS } from './common';

type FlexDirection = CSSProperties['flexDirection'];
export type FlexJustify = CSSProperties['alignItems'];

type FlexPreset = 'default';

interface FlexOptions {
  dir?: FlexDirection;
  wrap?: boolean;
  basis?: number;
  grow?: number;
  shrink?: number;
  vAlign?: FlexJustify;
  hAlign?: FlexJustify;
  preset?: FlexPreset;
}
const presets: Record<FlexPreset, FlexOptions> = {
  default: { dir: 'row', wrap: true },
};

export const flex = (options: FlexOptions = {}): CSSProperties => {
  const {
    dir,
    hAlign: justifyContent,
    vAlign: alignItems,
    grow,
    wrap,
    shrink,
    basis,
  } = {
    dir: 'row',
    wrap: true,
    ...(options.preset ? presets[options.preset] : {}),
    ...options,
  } as FlexOptions;

  return applyWhereDefined<CSSProperties>(
    {
      display: 'flex',
      flexFlow: `${dir} ${wrap ? 'wrap' : 'nowrap'}`,
    },
    {
      alignItems,
      justifyContent,
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis,
    }
  );
};

export const defaultFlex = (options: FlexOptions = {}): CSSProperties => flex({ preset: 'default', ...options });

export const flexCSS = (options: FlexOptions = {}) => propertiesToCSS(flex(options));
