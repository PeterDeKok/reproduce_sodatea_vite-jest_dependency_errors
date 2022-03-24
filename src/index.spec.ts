import 'jest';
import * as Imports from './index';

describe('Reproduction', () => {

    it('should be provided', () => {
        expect(Imports).toHaveProperty('Reproduction', expect.any(Function));
    });

});
