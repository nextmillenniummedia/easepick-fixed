import { IBaseConfig } from '@nextmillenniummedia/easepick-repacked-base-plugin';

export interface IAmpPlugin extends IBaseConfig {
  dropdown?: {
    minYear?: number;
    maxYear?: number;
    months?: boolean;
    years?: boolean | string;
  }
  resetButton?: (() => boolean) | boolean;
  darkMode?: boolean;
  weekNumbers?: boolean;
  locale?: {
    resetButton?: string;
  }
}

declare module '@nextmillenniummedia/easepick-repacked-core/dist/types' {
  interface IPickerConfig {
    AmpPlugin?: IAmpPlugin;
  }
}
