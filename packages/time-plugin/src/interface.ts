import { DateTime } from '@nextmillenniummedia/easepick-repacked-datetime';
import { IBaseConfig } from '@nextmillenniummedia/easepick-repacked-base-plugin';

export interface ITimeConfig extends IBaseConfig {
  native?: boolean;
  seconds?: boolean;
  stepHours?: number;
  stepMinutes?: number;
  stepSeconds?: number;
  format12?: boolean;
}

declare module '@nextmillenniummedia/easepick-repacked-core' {
  interface Core {
    getDate(): DateTime;
    getStartDate(): DateTime;
    getEndDate(): DateTime;
    setTime(value: string): void;
    setStartTime(value: string): void;
    setEndTime(value: string): void;
  }
}

declare module '@nextmillenniummedia/easepick-repacked-core/dist/types' {
  interface IPickerConfig {
    TimePlugin?: ITimeConfig;
  }
}