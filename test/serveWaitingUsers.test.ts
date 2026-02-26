import { expect } from "chai";
import { serveWaitingUsers } from "../DSAQuestions/serveWaitingUsers.ts";
import { testUsers, testTimeSlots } from "./fixtures/serveWaitingUsers.ts";

describe("Serve Waiting Users", () => {
  it("should return empty queue when no one arrived", () => {
    const input: [] = [];
    expect(serveWaitingUsers(input, testTimeSlots[0])).to.be.deep.equal({
      allowed: [],
      notAllowed: [],
    });
  });

  it("should not allowed users who arrived after checkin time", () => {
    expect(serveWaitingUsers(testUsers, testTimeSlots[0])).to.be.deep.equal({
      allowed: [1, 2, 4, 5, 6, 7, 8, 9, 10],
      notAllowed: [0, 3],
    });
  });
});
