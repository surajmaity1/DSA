function getBinaryNumber1(number) {
  if (typeof number !== "number" || isNaN(number)) {
    console.log("invalid number");
    return;
  }

  //   built in method
  //   return number.toString(2);

  let binary = "";

  for (; number > 0; number = Math.floor(number / 2)) {
    // number & 1 is same as number % 2
    binary = (number & 1) + binary;
  }

  return binary || "0";
}

function getBinaryNumber2(number) {
  if (typeof number !== "number" || isNaN(number)) {
    console.log("invalid number");
    return;
  }

  let binary = "";

  while(number > 0) {
    binary = (number & 1) + binary;
    number >>= 1;
  }

  return binary || "0";
}

// console.log(getBinaryNumber1(18));
// console.log(getBinaryNumber1(0));
console.log(getBinaryNumber2(0));
console.log(getBinaryNumber2(18));
