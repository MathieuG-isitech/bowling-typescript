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

    it('should return 40 if all rolls are 2', () => {
        const rolls = '22 22 22 22 22 22 22 22 22 22';
        expect(calculateScore(rolls)).toBe(40);
    });

    it('should return 60 if all rolls are 3', () => {
        const rolls = '33 33 33 33 33 33 33 33 33 33';
        expect(calculateScore(rolls)).toBe(60);
    });

    it('should return 80 if all rolls are 4', () => {
        const rolls = '44 44 44 44 44 44 44 44 44 44';
        expect(calculateScore(rolls)).toBe(80);
    });

    it('should return 100 if all rolls are 5', () => {
        const rolls = '55 55 55 55 55 55 55 55 55 55';
        expect(calculateScore(rolls)).toBe(100);
    });

    it('should return 120 if all rolls are 6', () => {
        const rolls = '66 66 66 66 66 66 66 66 66 66';
        expect(calculateScore(rolls)).toBe(120);
    });

    it('should return 140 if all rolls are 7', () => {
        const rolls = '77 77 77 77 77 77 77 77 77 77';
        expect(calculateScore(rolls)).toBe(140);
    });

    it('should return 160 if all rolls are 8', () => {
        const rolls = '88 88 88 88 88 88 88 88 88 88';
        expect(calculateScore(rolls)).toBe(160);
    });

    it('should return 180 if all rolls are 9', () => {
        const rolls = '99 99 99 99 99 99 99 99 99 99';
        expect(calculateScore(rolls)).toBe(180);
    });
        
});
