import { FeaturesFlags } from '@/shared/types';

let featureFlags: FeaturesFlags = {};

export const setFeaturesFlag = (flags: FeaturesFlags) => {
    featureFlags = flags;
};

export const getFeaturesFlag = (flag: keyof FeaturesFlags) => featureFlags[flag];
