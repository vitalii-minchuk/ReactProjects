import { add, validateValue, mapArrayToString, square, delay } from './index';

describe('validateValue', () => {
    it('returns true when pass 50', () => {
        expect(validateValue(50)).toBeTruthy();
    });
    it('too small', () => {
        expect(validateValue(-33)).toBeFalsy();
    });
    it('too big', () => {
        expect(validateValue(101)).toBeFalsy();
    });
    it('border values', () => {
        expect(validateValue(100)).toBeTruthy();
        expect(validateValue(0)).toBeTruthy();
    });
});

describe('add', () => {
    it('returns 10 when passed 3 & 7', () => {
        expect(add(3, 7)).toBe(10);
        expect(add(2, 2)).toBe(4);
        expect(add(-4, 1)).toBe(-3);
    })
    it('should return 0 when arguments are not passing', () => {
        expect(add()).toBe(0);
    });
    it('should return value of one argument when second argument is not passing', () => {
        expect(add(1)).toBe(1);
        expect(add(3)).toBe(3);
    });
});

describe('mapArrayToString', () => {
    it('returns correct result', () => {
        expect(mapArrayToString([1, 2, 5])).toEqual(['1', '2', '5']);
        expect(mapArrayToString([])).toEqual([]);
        expect(mapArrayToString([1, true, '1'])).toEqual(['1', '1']);
        expect(mapArrayToString([{}, 5, [], 'five'])).toEqual(['5', 'five']);
    });
});

describe("square", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })
    it('returns correct value', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(2);
        expect(square(2)).not.toBe(undefined);
        expect(square(2)).not.toBe('4');
    });
    it('returns 1 when passed 1', () => {
        expect(square(1)).toBe(1);
    });
    it('Math.pow has been called ones', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(3);
        expect(spyMathPow).toBeCalledTimes(1);
    });
    it('Math.pow has not been called', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });
});

describe('delay', () => {
    it('works correctly', async () => {
        const sum = await delay(() => 7 + 2, 2000);
        expect(sum).toBe(9);
    });
});

