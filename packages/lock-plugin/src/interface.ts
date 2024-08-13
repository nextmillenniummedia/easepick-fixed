import { DateTime } from '@nextmillenniummedia/easepick-repacked-datetime';
import { IBaseConfig } from '@nextmillenniummedia/easepick-repacked-base-plugin';

export interface ILockConfig extends IBaseConfig {

  minDate?: Date | string | number;
  maxDate?: Date | string | number;
  minDays?: number;
  maxDays?: number;
  selectForward?: boolean;
  selectBackward?: boolean;
  presets?: boolean;
  inseparable?: boolean;
  filter?: (date: DateTime | DateTime[], picked: DateTime[]) => boolean;
}

declare module '@nextmillenniummedia/easepick-repacked-core/dist/types' {
  interface IPickerConfig {
    LockPlugin?: ILockConfig;
  }
}
