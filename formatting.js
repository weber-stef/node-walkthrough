const removeWhitespace = (input) => {
  // trim space at ends

  let result = input.trim();
  // collapse duplicate spaces
  result = result.replace(/\s+/g, ' ');
  console.log(result);

}

const capitalizeInitial = (input) => {
  input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  console.log(input);
}
capitalizeInitial("teSt");
