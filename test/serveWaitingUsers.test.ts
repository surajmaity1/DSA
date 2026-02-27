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

  it("should allow one user when queue is empty", () => {
    expect(
      serveWaitingUsers([testUsers[1]], testTimeSlots[0]),
    ).to.be.deep.equal({
      allowed: [1],
      notAllowed: [],
    });
  });

  it("should not allowed users who arrived after checkin time", () => {
    expect(
      serveWaitingUsers(
        [testUsers[0], testUsers[1], testUsers[3]],
        testTimeSlots[0],
      ),
    ).to.be.deep.equal({
      allowed: [1],
      notAllowed: [0, 3],
    });
  });

  it("Should prioritize the Lightning Queue user when the queue is empty and both General and Lightning users arrive simultaneously", () => {
    expect(
      serveWaitingUsers([testUsers[10], testUsers[4]], testTimeSlots[0]),
    ).to.be.deep.equal({
      allowed: [4, 10],
      notAllowed: [],
    });
  });

  it("should allowed user based on priority", () => {
    expect(
      serveWaitingUsers(
        [testUsers[3], testUsers[10], testUsers[0], testUsers[4], testUsers[1]],
        testTimeSlots[0],
      ),
    ).to.be.deep.equal({
      allowed: [1, 4, 10],
      notAllowed: [3, 0],
    });
  });
});
