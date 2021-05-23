/* eslint-disable implicit-arrow-linebreak */
import { action } from 'typesafe-actions';
import { Theme, ThemeTypes } from './types';

export const applyTheme = (theme: Theme) =>
  action(ThemeTypes.APPLY_THEME, theme);
