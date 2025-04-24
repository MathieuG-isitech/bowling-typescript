import { calculateScore } from './bowling';

describe('Bowling Score Calculator', () => {

    it('should return 0 if all rolls are misses', () => {
        const rolls = '-- -- -- -- -- -- -- -- -- --';
        expect(calculateScore(rolls)).toBe(0);
    });

    it('should return 20 if all rolls are 1', () => {
        const rolls = '11 11 11 11 11 11 11 11 11 11';
        expect(calculateScore(rolls)).toBe(20);
    });
    
});
