import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';

import { classNames, Mods } from '@/shared/lib';
import { DropdownDirection } from '@/shared/types';
import { genericMemo } from '@/shared/const/genericMemo';

import { Button, ButtonTheme } from '../../../Button/Button';

import popupCls from '../../styles/Popups.module.scss';

import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    panelClassName?: string;
    direction?: DropdownDirection
    children: ReactNode;
    trigger: ReactNode;
    onClick?: () => void;

}

export const Popover = genericMemo((props: PopoverProps) => {
    const {
        className,
        trigger,
        children,
        direction = 'bottom-right',
        panelClassName,
        onClick,
    } = props;

    const mods: Mods = {};

    return (
        <HPopover className={classNames(popupCls.popup, mods, [className])}>
            <HPopover.Button
                as={Button}
                onClick={onClick}
                theme={ButtonTheme.CLEAR}
            >
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, [popupCls[direction], panelClassName])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
