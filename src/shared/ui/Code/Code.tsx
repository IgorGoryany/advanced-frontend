import {
    FC, memo, useCallback,
} from 'react';
import CopyCodeIcon from '@/shared/assets/icons/CopyCode.svg';
import { classNames, Mods } from '../../lib';
import { Button } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    children: string
}

export const Code: FC<CodeProps> = memo(
    (props: CodeProps) => {
        const {
            className,
            children,
        } = props;

        const mods: Mods = {};

        const onCopy = useCallback(() => {
            navigator.clipboard.writeText(children);
        }, [children]);

        return (
            <pre className={classNames(cls.code, mods, [className])}>
                <Button
                    onClick={onCopy}
                    className={cls.copyBtn}
                >
                    <CopyCodeIcon className={cls.copyIcon} />
                </Button>
                <code>
                    {children}
                </code>
            </pre>
        );
    },
);
