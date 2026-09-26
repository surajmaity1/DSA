function insertionSort(userInput: number[]) {
  if (!userInput) {
    return;
  }

  const size = userInput.length;

  if (size < 2) {
    return;
  }

  // one way
  for (let outerIndex = 1; outerIndex < size; outerIndex++) {
    const pickedItem = userInput[outerIndex]!;
    let innerIndex = outerIndex - 1;

    while (innerIndex >= 0 && userInput[innerIndex]! > pickedItem) {
      userInput[innerIndex + 1] = userInput[innerIndex]!;
      innerIndex--;
    }
    userInput[innerIndex + 1] = pickedItem;
  }

  // another way
  // for (let outerIndex = 1; outerIndex < size; outerIndex++) {
  //     let innerIndex = outerIndex;

  //     while(innerIndex > 0 && userInput[innerIndex - 1]! > userInput[innerIndex]!) {
  //         const temp = userInput[innerIndex - 1]!;
  //         userInput[innerIndex - 1] = userInput[innerIndex]!
  //         userInput[innerIndex] = temp;

  //         innerIndex--;
  //     }
  // }
}

function main() {
  const userInput = [93, 1, 22, 3, 49, 0, 11];
  insertionSort(userInput);

  console.log(`sorted array: ${userInput}`);
}

main();
