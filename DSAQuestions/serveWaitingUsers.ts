/*
// Note: DRAFT
Question:

first pass: Lightening Queue
Time slot: 1.00 to 1.15

Queue:
    1. General Queue
    2. Lighten Queue

Condition of Lighten Queue:
    1. Enter queue when time has reached
    2. For every 3 users in lightening ( 1 must be from general)


----

Edge cases:
- 1. Two users arrive at the same time.
- 2. General is empty
- 3. Ride is cancelled.
- 4. Verficiation taking time even coming at the correct time.
- 5. 
- 
- 
- 
- 
- 

Construction:



Person p1:
- arrival time
- time slot
*/

export type TimeSlot = {
  start: number;
  end: number;
};

export type UserInfo = {
  id: number;
  arrival: number;
  slot?: TimeSlot;
};

type Result = {
  allowed: number[];
  notAllowed: number[];
};

function input(user: UserInfo[]) {
  user[1] = {
    id: 1,
    arrival: 11,
    slot: {
      start: 10.45,
      end: 11.15,
    },
  };

  user[2] = {
    id: 2,
    arrival: 12,
    slot: {
      start: 11.45,
      end: 12,
    },
  };

  user[3] = {
    id: 3,
    arrival: 12,
    slot: {
      start: 11.45,
      end: 12,
    },
  };

  user[4] = {
    id: 4,
    arrival: 12,
  };

  user[5] = {
    id: 5,
    arrival: 11,
  };

  user[6] = {
    id: 6,
    arrival: 10,
  };

  user[7] = {
    id: 7,
    arrival: 11.45,
  };

  user[8] = {
    id: 8,
    arrival: 12,
  };

  user[9] = {
    id: 9,
    arrival: 10.15,
  };

  user[10] = {
    id: 10,
    arrival: 1,
  };
}

function sortUsersBasedonPriority(
  users: UserInfo[],
  allowedUsers: number[],
  userId: number,
) {
  allowedUsers.push(userId);
}

export function serveWaitingUsers(
  input: UserInfo[],
  checkInTime: TimeSlot,
): Result {
  if (input.length === 0) {
    return {
      allowed: [],
      notAllowed: [],
    };
  }

  // store id
  const notAllowedUsers = [];
  const allowedUsers: number[] = [];

  for (let index = 0; index < input.length; index++) {
    const eachPerson = input[index];
    const eachPersonSlot = eachPerson.slot;

    // Lightening queue
    if (
      eachPersonSlot &&
      eachPersonSlot.start >= checkInTime.start &&
      eachPersonSlot.end <= checkInTime.end
    ) {
      sortUsersBasedonPriority(input, allowedUsers, eachPerson.id);
    }
    // General queue
    else if (eachPerson.arrival <= checkInTime.end) {
      sortUsersBasedonPriority(input, allowedUsers, eachPerson.id);
    }
    // not allowed users
    else {
      notAllowedUsers.push(eachPerson.id);
    }
  }

  return {
    allowed: allowedUsers,
    notAllowed: notAllowedUsers,
  };
}

function main() {
  const noOfUsers = 10;
  const users = Array(noOfUsers + 1).fill({});
  const checkInTime: TimeSlot = {
    start: 10,
    end: 12,
  };

  input(users);
  console.log(serveWaitingUsers(users, checkInTime));
}

// main();
