import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextProps {
    Spring?: SpringType
    Gesture?: GestureType
    isLoaded?: boolean
}

const AnimationContext = createContext<AnimationContextProps>({});

export const useAnimationsContext = () => useContext(AnimationContext) as Required<AnimationContextProps>;

const getAnimationsLibs = async () => Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
]);

interface AnimationProviderProps {
    children: ReactNode
}

export const AnimationProvider = ({ children }:AnimationProviderProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();

    useEffect(() => {
        getAnimationsLibs().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);
    const value = useMemo(() => ({
        Spring: SpringRef.current,
        Gesture: GestureRef.current,
        isLoaded,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};
