/**
 * Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str.
The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.
 */

function sentensify(str) {
  return (str.split(/\W/)).join(" ");  // first spliting the string into an array and then join elements of that array into a string again with desired delimiter
}

console.log(sentensify("May-the-force-be-with-you"));  // May the force be with you
