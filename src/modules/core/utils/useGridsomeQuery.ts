import {
  computed,
  ComputedRef,
  getCurrentInstance,
} from '@vue/composition-api';

/** Get gridsome static query as a reactive value */
export const useStaticQuery = <TQuery extends Record<string, any>, TResult>(
  transformer: (queryResult: TQuery) => TResult,
): ComputedRef<TResult> => {
  const currentInstace = getCurrentInstance();

  return computed((): TResult => transformer(currentInstace?.proxy.$static));
};

/** Get gridsome page query as a reactive value */
export const usePageQuery = <TQuery extends Record<string, any>, TResult>(
  transformer: (queryResult: TQuery) => TResult,
): ComputedRef<TResult> => {
  const currentInstace = getCurrentInstance();

  return computed((): TResult => transformer(currentInstace?.proxy.$page));
};
