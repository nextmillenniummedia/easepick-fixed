import { IBaseConfig } from '@nextmillenniummedia/easepick-repacked-base-plugin';

export interface IKbdPlugin extends IBaseConfig {
  unitIndex?: number;
  dayIndex?: number;
  html?: string;
}

declare module '@nextmillenniummedia/easepick-repacked-core/dist/types' {
  interface IKbdPlugin {
    KbdPlugin?: IKbdPlugin;
  }
}
