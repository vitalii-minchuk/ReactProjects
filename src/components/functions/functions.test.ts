import { validateValue } from './index';

describe("validateValue", () => {
    it("returns true when pass 50", () => {
        const result = validateValue(50);
        expect(result).toBeTruthy();
    });
})