import { ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from 'shared/types';
import { genericMemo } from 'shared/const/genericMemo';
import { Button } from '../../../Button/Button';
import cls from './Popover.module.scss';
import popupCls from '../../styles/Popups.module.scss';

interface PopoverProps {
    className?: string;
    panelClassName?: string;
    direction?: DropdownDirection
    children: ReactNode;
    trigger: ReactNode;

}

export const Popover = genericMemo((props: PopoverProps) => {
    const {
        className,
        trigger,
        children,
        direction = 'bottom-right',
        panelClassName,
    } = props;

    const mods: Mods = {};

    return (
        <HPopover className={classNames(popupCls.popup, mods, [className])}>
            <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, [popupCls[direction], panelClassName])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
