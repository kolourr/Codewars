
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

Code Explanation
Split the string at one of the following conditions (converted to an array)
a whitespace character [\s] is encountered
underscore character [_] is encountered
or is followed by an uppercase letter [(?=[A-Z])]
Join the array using a hyphen (-)
Lowercase the whole resulting string



