import { calculateScore } from './bowling';

describe('Bowling Score Calculator', () => {

    test('should return 0 if all rolls are misses', () => {
        const rolls = '-- -- -- -- -- -- -- -- -- --';
        expect(calculateScore(rolls)).toBe(0);
    });
    
});
