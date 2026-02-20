// Given a value of x, find f(x).
// Formula: f(x) = (2x)^3 + f(x-1) + f(x-3) . (When x < 10, f(x) = 1)

function main(x) {
  if (x < 10) {
    return 1;
  }
  return (2 * x)^3 + (main(x - 1) + main(x - 3));
}

console.log(main(11));

// main();
