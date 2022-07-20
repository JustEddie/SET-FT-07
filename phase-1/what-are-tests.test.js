/*
    2 + 3 = 5
    6 + 7 = 13
 */
const myFunctions = require("./what-are-tests")
// const add = require("./what-are-tests");
// const primeCheck = require("./what-are-tests");
// const palindromeChecker = require("./what-are-tests");

describe('Add', () => {
    it('should return 5 when 2, 3 is input', () => {
        const expected = 5;
        const actual = myFunctions.add(2,3);

        expect(actual).toEqual(expected);
    })

    it('should return 13 when 6, 7 is input', () => {
        const expected = 13;
        const actual = myFunctions.add(6,7);

        expect(actual).toEqual(expected);
    })
});



describe("PrimeCheck", ()=> {
    it("should return true when 5 is input", () => {
        const expected = true;
        const actual = myFunctions.primeCheck(5);

        expect(actual).toEqual(expected);
    })

    it("should return false when 4 is input", () => {
        const expected = false;
        const actual = myFunctions.primeCheck(4);

        expect(actual).toEqual(expected);
    })

    it("should throw an error when -1 is input", () => {
        const actual = myFunctions.primeCheck(-1);

        expect(actual).toThrowError;
    })

    it("should return  1 is neither prime or composite number message when 1 is input", ()=>{
        const actual = myFunctions.primeCheck(1);
        expect(actual).toMatch("1 is neither prime nor composite number.");
    })

    
})


describe('palindromeChecker', () => {
    it('should return true when race car is input', () => {
        const expected = true;
        const actual = myFunctions.palindromeChecker("eye");

        expect(actual).toEqual(expected);
    })

    it('should return true when “A man, a plan, a canal. Panama” is input', () => {
        const expected = true;
        const actual = myFunctions.palindromeChecker("A man, a plan, a canal. Panama");

        expect(actual).toEqual(expected);
    })

    it('should return true when “0_0 (: /-\ :) 0–0” is input', () => {
        const expected = true;
        const actual = myFunctions.palindromeChecker("0_0 (: /-\ :) 0–0");

        expect(actual).toEqual(expected);
    })

    it('should return false when “not a palindrome” is input', () => {
        const expected = false;
        const actual = myFunctions.palindromeChecker("not a palindrome");

        expect(actual).toEqual(expected);
    })


});