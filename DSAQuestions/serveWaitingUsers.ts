export type TimeSlot = {
  start: number;
  end: number;
  isCancelled?: boolean;
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

function sortUsersBasedOnPriority(
  users: UserInfo[],
  allowedUsers: number[],
  newUser: UserInfo,
) {
  if (allowedUsers.length === 0) {
    allowedUsers.push(newUser.id);
    return;
  }

  for (let index = 0; index < allowedUsers.length; index++) {
    const userId = allowedUsers[index];
    const currentAllowedUser = users.filter((user) => user.id === userId)[0];

    // console.log(
    //   `insert user: ${newUser.id} | before index: ${index}, user.length: ${allowedUsers.length}`,
    // );
    if (
      currentAllowedUser.arrival === newUser.arrival &&
      !currentAllowedUser.slot &&
      newUser.slot
    ) {
      allowedUsers.splice(index, 0, newUser.id);
      index++;
      break;
      // console.log("current user id", userId, "inside if");
    } else if (
      currentAllowedUser.arrival !== newUser.arrival &&
      currentAllowedUser.slot &&
      newUser.slot
    ) {
      if (currentAllowedUser.slot.start > newUser.slot.start) {
        allowedUsers.splice(index, 0, newUser.id);
      } else {
        allowedUsers.splice(index + 1, 0, newUser.id);
      }
      index++;
      break;
    }

    // console.log(
    //   `insert user: ${newUser.id} | after index: ${index}, user.length: ${allowedUsers.length}`,
    // );
  }
}

export function serveWaitingUsers(
  users: UserInfo[],
  checkInTime: TimeSlot,
): Result {
  if (checkInTime.isCancelled === true) {
    return {
      allowed: [],
      notAllowed: [...],
    };
  }

  if (users.length === 0) {
    return {
      allowed: [],
      notAllowed: [],
    };
  }

  // store id
  const notAllowedUsers = [];
  const allowedUsers: number[] = [];
  const generalQueue: UserInfo[] = [];

  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    const userSlot = user.slot;

    // Lightening queue
    if (
      userSlot &&
      userSlot.start >= checkInTime.start &&
      userSlot.end <= checkInTime.end
    ) {
      sortUsersBasedOnPriority(users, allowedUsers, user);
    }
    // General queue
    else if (user.arrival <= checkInTime.end) {
      let isInserted = false;
      for (let index = 0; index < generalQueue.length; index++) {
        const existingUser = generalQueue[index];
        if (user.arrival < existingUser.arrival) {
          isInserted = true;
          generalQueue.splice(index, 0, user);
          break;
        }
      }

      if (!isInserted) {
        generalQueue.push(user);
      }
    }
    // not allowed users
    else {
      notAllowedUsers.push(user.id);
    }
  }

  // Check whether LQ's users present or not
  if (allowedUsers.length > 0) {
    // After prioritise LQ, place GQ's user at correct position as requirement.
    let insertionPosition = 2;
    while (generalQueue.length > 0) {
      const generalQueueUser = generalQueue.shift();
      if (!generalQueueUser) {
        break;
      }
      allowedUsers.splice(insertionPosition, 0, generalQueueUser?.id);
      insertionPosition += 3;
    }
  } else {
    // only general queue users present
    for (let index = 0; index < generalQueue.length; index++) {
      allowedUsers.push(generalQueue[index].id);
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
