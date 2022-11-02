/*

Challenge
**************
We will be writing a program that prints the numbers from 100 to 200 to
the console, with three exceptions:

  - If the number is a multiple of 3, print the string "Loopy" instead
    of the number.
  - If the number is a multiple of 4, print the string "Lighthouse"
    instead of the number.
  - If the number is a multiple of both 3 and 4, print the string 
    "LoopyLighthouse" instead of the number.

By print, we are referring to console.log.

*/

// Print numbers from 100 to 200, inclusive.
for (i = 100; i <= 200; i++) {
  // LoopyLighthouse numbers are printed as "LoopyLighthouse" instead.
  if ((i % 3 === 0) && (i % 4 === 0)) {
    console.log("LoopyLighthouse");
  // Loopy numbers are printed as "Loopy" instead.
  } else if (i % 3 === 0) {
    console.log("Loopy");
  // Lighthouse numbers are printed as "Lighthouse" instead.
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else {
    // Print the number.
    console.log(i);
  }
}