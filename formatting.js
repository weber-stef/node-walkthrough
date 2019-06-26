const removeWhitespace = (input) => {
  // trim space at ends

  let result = input.trim();
  // collapse duplicate spaces
  result = result.replace(/\s+/g, ' ');
  console.log(result);

}
const capitalizeInitial = (input) => {
  input = input.toLowerCase().split(' ').map(function (word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
  input = input.replace(' ', '_')
  return input;
}
console.log(capitalizeInitial("saO pAulo"));
