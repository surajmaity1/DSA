import type {
  UserInfo,
  TimeSlot,
} from "../../DSAQuestions/serveWaitingUsers.ts";

export const testTimeSlots: TimeSlot[] = [
  {
    start: 10,
    end: 12,
  },
  {
    start: 9,
    end: 11,
  },
];

export const testUsers: UserInfo[] = [
  { id: 0, arrival: 12.45 },
  {
    id: 1,
    arrival: 11,
    slot: {
      start: 10.45,
      end: 11.15,
    },
  },
  {
    id: 2,
    arrival: 10,
  },
  {
    id: 3,
    arrival: 12.1,
  },
  {
    id: 4,
    arrival: 12,
    slot: {
      start: 11.45,
      end: 12,
    },
  },
  {
    id: 5,
    arrival: 12,
  },
  {
    id: 6,
    arrival: 11,
  },
  {
    id: 7,
    arrival: 10,
  },
  {
    id: 8,
    arrival: 9,
    slot: {
      start: 11.45,
      end: 12,
    },
  },
  {
    id: 9,
    arrival: 8,
  },
  {
    id: 10,
    arrival: 12,
  },
];
