import { FC, memo, useCallback } from 'react';
import {
    classNames, DynamicModuleLoader, Mods, ReducersList, useAppDispatch,
} from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Button, ButtonTheme, Input, Text, TextTheme,
} from 'shared/ui';
import { useSelector } from 'react-redux';
import { addCommentFormAction, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/getAddCommentForm';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = memo(
    (props: AddCommentFormProps) => {
        const {
            className,
            onSendComment,
        } = props;
        const mods: Mods = {};
        const { t } = useTranslation();

        const dispatch = useAppDispatch();
        const text = useSelector(getAddCommentFormText);
        const error = useSelector(getAddCommentFormError);

        const onTextChange = useCallback((value?: string) => {
            dispatch(addCommentFormAction.setText(value || ''));
        }, [dispatch]);

        const onSendHandler = useCallback(() => {
            onSendComment(text || '');
            dispatch(addCommentFormAction.setText(''));
        }, [dispatch, onSendComment, text]);

        return (
            <DynamicModuleLoader reducers={reducers}>
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <div className={classNames(cls.addCommentForm, mods, [className])}>
                    <Input
                        className={cls.input}
                        placeholder={t('Введите текст комментария')}
                        value={text}
                        onChange={onTextChange}
                    />
                    <Button
                        onClick={onSendHandler}
                        theme={ButtonTheme.OUTLINED}
                    >
                        {t('Отправить')}
                    </Button>
                </div>
            </DynamicModuleLoader>
        );
    },
);

export default AddCommentForm;
