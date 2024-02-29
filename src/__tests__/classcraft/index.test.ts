import classcraft from 'classcraft';

describe('Test classcraft joining.', () => {
    it('Should merge all arguments if the type of arg is string.', () => {
        const result = classcraft('test-1', 'test-2', 'test-3');
        const expected = 'test-1 test-2 test-3';

        expect(result).toEqual(expected);
    });

    it('Should merge only truthy valued properties.', () => {
        const result = classcraft({ 'test-1': true }, { 'test-2': false, 'test-3': true }, { 'test-4': undefined });
        const expected = 'test-1 test-3';

        expect(result).toEqual(expected);
    });
});
