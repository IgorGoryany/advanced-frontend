import {
    FC, memo, ReactNode, useCallback,
} from 'react';
import { classNames, Mods } from 'shared/lib';
import { Card } from 'shared/ui';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string = string> {
    value: T
    content: ReactNode
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[]
    value: T;
    onTabClick: (tab: TabItem<T>) => void
}

const genericMemo: <T>(component: T) => T = memo;

export const Tabs = genericMemo(
    <T extends string>(props: TabsProps<T>) => {
        const {
            className,
            tabs,
            value,
            onTabClick,
        } = props;
        const mods: Mods = {};

        const clickHandler = useCallback((tab: TabItem<T>) => () => {
            onTabClick(tab);
        }, [onTabClick]);

        return (
            <div className={classNames(cls.tabs, mods, [className])}>
                {tabs.map((tab) => (
                    <Card
                        onClick={clickHandler(tab)}
                        theme={tab.value === value ? 'normal' : 'outlined'}
                        className={cls.tab}
                        key={tab.value}
                    >
                        {tab.content}
                    </Card>
                ))}
            </div>
        );
    },
);
