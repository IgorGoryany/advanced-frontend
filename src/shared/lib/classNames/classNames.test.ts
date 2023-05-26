import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames(
            'someClass',
        ))
            .toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass additionalSome1 additionalSome2';
        expect(classNames(
            'someClass',
            {},
            ['additionalSome1', 'additionalSome2'],
        ))
            .toBe(expected);
    });
    test('with mods class', () => {
        const expected = 'someClass modeSome1 modeSome2 additionalSome1 additionalSome2';
        expect(classNames(
            'someClass',
            {
                modeSome1: true,
                modeSome2: true,
            },
            ['additionalSome1', 'additionalSome2'],
        ))
            .toBe(expected);
    });
    test('with mods with false class', () => {
        const expected = 'someClass modeSome1 additionalSome1 additionalSome2';
        expect(classNames(
            'someClass',
            {
                modeSome1: true,
                modeSome2: false,
            },
            ['additionalSome1', 'additionalSome2'],
        ))
            .toBe(expected);
    });

    test('with mods with undefined class', () => {
        const expected = 'someClass modeSome1 additionalSome1 additionalSome2';
        expect(classNames(
            'someClass',
            {
                modeSome1: true,
                modeSome2: undefined,
            },
            ['additionalSome1', 'additionalSome2'],
        ))
            .toBe(expected);
    });
});
