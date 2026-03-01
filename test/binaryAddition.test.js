import { expect } from "chai";
import { binaryAddition, binaryToDecimal } from "../DSAQuestions/addBinaryIntegers.js";

describe('binary addition', () => {
    it("should return 14 result for valid inputs -> 7 + 7", () => {
        expect(binaryAddition([1, 1, 1], [1, 1, 1])).to.deep.equal([0, 1, 1, 1, 0]);
    });

    it("should return 11 result for valid inputs -> 5 + 6", () => {
        expect(binaryAddition([1, 0, 1], [0, 1, 1])).to.deep.equal([0, 1, 0, 1, 1]);
    });

    it("should return 9 result for valid inputs -> 3 + 6", () => {
        expect(binaryAddition([1, 1, 0], [0, 1, 1])).to.deep.equal([0, 1, 0, 0, 1]);
    });
});

describe('binaryToDecimal', () => {
    it("should return 7 result for valid inputs -> [1, 1, 1]", () => {
        expect(binaryToDecimal([1, 1, 1])).to.deep.equal(7);
    });
    it("should return 3 result for valid inputs -> [1, 1, 0]", () => {
        expect(binaryToDecimal([1, 1, 0])).to.deep.equal(3);
    });
    it("should return 1 result for valid inputs -> [1, 0, 0]", () => {
        expect(binaryToDecimal([1, 0, 0])).to.deep.equal(1);
    });
    it("should return 5 result for valid inputs -> [1, 0, 1]", () => {
        expect(binaryToDecimal([1, 0, 1])).to.deep.equal(5);
    });
});