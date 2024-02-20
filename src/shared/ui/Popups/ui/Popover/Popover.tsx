import { FC, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from 'shared/types';
import { genericMemo } from 'shared/const/genericMemo';
import cls from './Popover.module.scss';
import popupCls from '../../../styles/Popups.module.scss';

export interface PopoverItems<T extends string> {

}

interface PopoverProps<T extends string> {
    className?: string;
    direction?: DropdownDirection
    items: PopoverItems<T>[];
    trigger: ReactNode;
}

export const Popover = genericMemo(
    <T extends string>(props: PopoverProps<T>) => {
        const {
            className,
            trigger,
            items,
            direction,
        } = props;

        const mods: Mods = {};

        const { t } = useTranslation();
        return (
            <HPopover className={classNames(cls.popover, mods, [className])}>
                <HPopover.Button>{trigger}</HPopover.Button>

                <HPopover.Panel className="absolute z-10">
                    <div className="grid grid-cols-2">
                        <a href="/analytics">Analytics</a>
                        <a href="/engagement">Engagement</a>
                        <a href="/security">Security</a>
                        <a href="/integrations">Integrations</a>
                    </div>

                    <img src="/solutions.jpg" alt="" />
                </HPopover.Panel>
            </HPopover>
        );
    },
);
