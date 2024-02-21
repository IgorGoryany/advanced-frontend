export { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export { DynamicModuleLoader } from './components/DynamicModuleLoader/DynamicModuleLoader';
export type { ReducersList } from './components/DynamicModuleLoader/DynamicModuleLoader';
export {
    Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY,
} from './theme/ThemeContext/ThemeContext';
export type { ThemeContextProps } from './theme/ThemeContext/ThemeContext';
export { classNames } from './classNames/classNames';
export type { Mods, Additional } from './classNames/classNames';
export { useTheme } from './hooks/useTheme/useTheme';
export { useInitialEffect } from './hooks/useInitialEffect/useInitialEffect';
export { useHover } from './hooks/useHover/useHover';
export { useThrottle } from './hooks/useThrottle/useThrottle';
export { useInfiniteScroll } from './hooks/useInfiniteScroll/useInfiniteScroll';
export { useLayoutInitialEffect } from './hooks/useLayoutInitialEffect/useLayoutInitialEffect';
export { useDebounce } from './hooks/useDebounce/useDebounce';
export { addQueryParams } from './url/addQueryParams/addQueryParams';
export { useDevice } from './hooks/useDevice/useDevice';
export { useModal } from './hooks/useModal/useModal';
export { AnimationProvider, useAnimationsContext } from './components/AnimationProvider/AnimationProvider';
