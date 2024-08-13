import { DateTime } from '@nextmillenniummedia/easepick-repacked-datetime';
import { IBaseConfig } from '@nextmillenniummedia/easepick-repacked-base-plugin';

export interface IPresetConfig extends IBaseConfig {
  customPreset?: Record<string, unknown>;
  customLabels?: string[];
  position?: string;
}

declare module '@nextmillenniummedia/easepick-repacked-core' {
  interface Core {
    setStartDate(date: Date | string | number): void;
    setEndDate(date: Date | string | number): void;
    setDateRange(start: Date | string | number, end: Date | string | number): void;
    getStartDate(): DateTime;
    getEndDate(): DateTime;
  }
}
declare module '@nextmillenniummedia/easepick-repacked-core/dist/types' {
  interface IPickerConfig {
    PresetPlugin?: IPresetConfig;
  }
}
