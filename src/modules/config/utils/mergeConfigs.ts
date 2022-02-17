import { isArray, mergeWith } from 'lodash';

import type { GridsomeConfig } from '@/typings/gridsome';

export const mergeConfigs = (...configs: GridsomeConfig[]) => {
  // @ts-ignore
  return mergeWith(...configs, (objValue: unknown, srcValue: unknown) => {
    // Join arrays
    if (isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  });
};
