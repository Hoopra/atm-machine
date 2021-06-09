import pickBy from 'lodash.pickby';
import { CSSProperties } from 'react';

export const propertiesToCSS = (style: CSSProperties) =>
  Object.entries(style)
    .map(([key, value]) => `${key.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)}: ${value};`)
    .join('\n');

export const applyWhereDefined = <T extends { [key: string]: any }>(state: T, update: Partial<T>): T => ({
  ...state,
  ...pickBy(update, value => value !== undefined),
});
