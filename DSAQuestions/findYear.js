const fs = require("fs");

function bruteForce() {
  const givenInput = 25730;
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
    for (let month = 0; month < 12; month++) {
      const monthFilePath = `${subFolderPath}\\${monthFiles.get(month)}`;
      const fileContent = fs.readFileSync(monthFilePath, "utf8");
      const match = fileContent.match(regex);
      const noOfPeople = parseInt(match[1], 10);
      if (noOfPeople === givenInput) {
        printResult(givenInput, totalFolders[year]);
        return;
      }
    }
  }

  printResult(givenInput, result);
}

function printResult(givenInput, result) {
  console.log(
    result === -1
      ? "Not Found"
      : `${givenInput} people found in this year: ${result}`
  );
}

bruteForce();
