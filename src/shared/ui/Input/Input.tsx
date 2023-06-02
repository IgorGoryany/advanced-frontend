import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from '../../lib';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string
    value?: string
    onChange?: (value: string) => void
    autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder = '',
        autofocus,
        ...otherProps
    } = props;
    const mods: Record<string, boolean | undefined> = {};
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inpRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart * 7.36 || 0);
    };

    useEffect(() => {
        if (autofocus) {
            inpRef.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.inputWrapper, mods, [className])}>
            <label htmlFor="hz" className={cls.placeholder}>
                {`${placeholder}>`}
            </label>
            <div className={cls.caretWrapper}>
                <input
                    ref={inpRef}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    type={type}
                    value={value}
                    className={cls.input}
                    onChange={onChangeHandler}
                    id="hz"
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition}px` }}
                    />
                )}
            </div>
        </div>
    );
});
