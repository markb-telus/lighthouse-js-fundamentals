/**
 * Function that accepts a querystring and returns key value pairs
 * @param {string} text - the querystring to decode
 * @returns {<{key: string, value: string}>} key value pairs
 */
const urlDecode = function(text) {
  // In case someone included whitespace before or after, remove it
  text = text.trim();
  // In case someone included a ? at the start, let's remove it
  if (text[0] === "?") text = text.slice(1);
  // Find the key value pairs and move them into an array
  let kvPairs = [];
  kvPairs = text.split('&');
  console.log(kvPairs);

  return text;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*
EXPECTED OUTPUT:
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/