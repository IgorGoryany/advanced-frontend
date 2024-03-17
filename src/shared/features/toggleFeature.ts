import { FeaturesFlags } from '@/shared/types';

import { getFeaturesFlag } from './featureFlags';

interface ToggleFeatureOption<TOn, TOff> {
    featureName: keyof FeaturesFlags
    on: TOn
    off: TOff
}

export const toggleFeature = <TOn, TOff>({ featureName, off, on }: ToggleFeatureOption<TOn, TOff>) => {
    if (getFeaturesFlag(featureName)) {
        return on;
    }

    return off;
};
