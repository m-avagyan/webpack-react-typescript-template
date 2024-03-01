import { getFileType } from 'ublob';

describe('Get file type tests.', () => {
    it('Should throw exception error if argument is not string.', () => {
        try {
            // @ts-ignore
            const result = getFileType(1);

            expect(result).toThrowError('The parameter must be a blob string.');
        } catch (error) {
            console.info(error);
        }
    });

    it('Should throw exception error if file type not supported.', () => {
        try {
            const result = getFileType('unsupported-file');

            expect(result).toThrowError('The file type is not supported.');
        } catch (error) {
            console.info(error);
        }
    });

    it('Should return file type.', () => {
        const result = getFileType('blob-start:application/pdf;string:');

        expect(result).toEqual('application/pdf');
    });
});
