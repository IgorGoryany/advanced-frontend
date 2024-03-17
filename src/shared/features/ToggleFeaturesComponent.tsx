import { FeaturesFlags } from '@/shared/types';

import { getFeaturesFlag } from './featureFlags';

interface ToggleFeaturesProps {
    featureName: keyof FeaturesFlags;
    on: JSX.Element
    off: JSX.Element | null
}

export const ToggleFeature = (props: ToggleFeaturesProps) => {
    const { on, off, featureName } = props;
    if (getFeaturesFlag(featureName)) {
        return on;
    }

    return off;
};
