import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toEqual('?test=value');
    });
    test('test with multiple param', () => {
        const params = getQueryParams({
            test: 'value',
            second: 'value2',
        });
        expect(params).toEqual('?test=value&second=value2');
    });
    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toEqual('?test=value');
    });
});
