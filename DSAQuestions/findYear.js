import fs from "fs";

function bruteForce() {
  const givenInput = 128292;
  const mainDirectory =
    "C:\\Users\\suraj\\Downloads\\ReaLDSA-FIND-YEAR\\Problem - Find Year\\Assignment\\data";
  const monthFiles = new Map([
    [0, "January.txt"],
    [1, "February.txt"],
    [2, "March.txt"],
    [3, "April.txt"],
    [4, "May.txt"],
    [5, "June.txt"],
    [6, "July.txt"],
    [7, "August.txt"],
    [8, "September.txt"],
    [9, "October.txt"],
    [10, "November.txt"],
    [11, "December.txt"],
  ]);
  let result = -1;
  const regex = /\[\[Number of people: (\d+)\]\]/;

  const totalFolders = fs.readdirSync(mainDirectory);
  const noOfFolders = totalFolders.length;

  for (let year = 1; year < noOfFolders; year++) {
    const subFolderPath = `${mainDirectory}\\${totalFolders[year]}`;
    // console.log(totalFolders[year])
    for (let month = 0; month < 12; month++) {
      const monthFilePath = `${subFolderPath}\\${monthFiles.get(month)}`;

      if (!fs.existsSync(monthFilePath)) {
        printResult(givenInput, -1, -1);
        return;
      }

      const fileContent = fs.readFileSync(monthFilePath, "utf8");
      const match = fileContent.match(regex);
      const noOfPeople = parseInt(match[1], 10);
      if (noOfPeople === givenInput) {
        printResult(givenInput, monthFiles.get(month), totalFolders[year]);
        return;
      } else if (givenInput < noOfPeople) {
        printResult(givenInput, -1, -1);
        return;
      }
    }
  }

  printResult(givenInput, result, result);
}

function optimizeApproach() {
  const givenInput = 50113385;
  const mainDirectory =
    "C:\\Users\\suraj\\Downloads\\ReaLDSA-FIND-YEAR\\Problem - Find Year\\Assignment\\data";
  const monthFiles = new Map([
    [0, "January.txt"],
    [1, "February.txt"],
    [2, "March.txt"],
    [3, "April.txt"],
    [4, "May.txt"],
    [5, "June.txt"],
    [6, "July.txt"],
    [7, "August.txt"],
    [8, "September.txt"],
    [9, "October.txt"],
    [10, "November.txt"],
    [11, "December.txt"],
  ]);
  const regex = /\[\[Number of people: (\d+)\]\]/;

  const totalFolders = fs.readdirSync(mainDirectory);
  const noOfFolders = totalFolders.length;

  let startYearTraversal = 1;
  let endYearTraversal = noOfFolders;

  while (startYearTraversal <= endYearTraversal) {
    const middleYearTraversal =
      startYearTraversal + Math.floor((endYearTraversal - startYearTraversal) / 2);
    const subFolderPath = `${mainDirectory}\\${totalFolders[middleYearTraversal]}`;
    // console.log(totalFolders[middleYearTraversal]);

    let startingMonth = 0;
    let endingMonth = 11;
    let lastCalculatedMonth = -1;

    while (startingMonth <= endingMonth) {
      const middleMonth =
        startingMonth + Math.floor((endingMonth - startingMonth) / 2);
      const monthFilePath = `${subFolderPath}\\${monthFiles.get(middleMonth)}`;

      if (!fs.existsSync(monthFilePath)) {
        endingMonth = middleMonth - 1;
        continue;
      }

      const fileContent = fs.readFileSync(monthFilePath, "utf8");
      const match = fileContent.match(regex);
      const noOfPeople = parseInt(match[1], 10);

      if (givenInput < noOfPeople) {
        endingMonth = middleMonth - 1;
      } else if (givenInput > noOfPeople) {
        startingMonth = middleMonth + 1;
      } else {
        printResult(
          givenInput,
          monthFiles.get(middleMonth),
          totalFolders[middleYearTraversal]
        );
        return;
      }

      lastCalculatedMonth = middleMonth;
    }

    if (lastCalculatedMonth === 0) {
      endYearTraversal = middleYearTraversal - 1;
    } else if (lastCalculatedMonth === 11) {
      startYearTraversal = middleYearTraversal + 1;
    } else {
      printResult(givenInput, -1, -1);
      return;
    }
  }
  printResult(givenInput, -1, -1);
}

function printResult(givenInput, month, year) {
  console.log(
    year === -1
      ? `${givenInput} people not found`
      : `${givenInput} people found in ${month} of ${year}`
  );
}

// bruteForce();
optimizeApproach();
