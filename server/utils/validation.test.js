var expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var str = isRealString(99);
        expect(str).toBe(false);
    });
    it('should reject strings with only spaces', () => {
        var str = isRealString('   ');
        expect(str).toBe(false);
    });
    it('should allow strings with non-space characters', () => {
        var str = isRealString('  lotr');
        expect(str).toBe(true);
    });
});