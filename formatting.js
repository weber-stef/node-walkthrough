exports.prepareString = input => {
  let result = removeWhitespace(input);
  let tmpArray = result.split(' ');
  console.log('tmpArray consists of ' + tmpArray);
  tmpArray = tmpArray.map(el => capitalizeInitial(el));
  console.log("tmpArray-members are of type " + typeof (tmpArray[0]));
  result = tmpArray.join('_');
  console.log("result inside prepareString map is " + result);
  return result;
}

const removeWhitespace = input => {
  // trim space off the ends
  let result = input.trim();

  // collapse duplicate spaces
  result = result.replace(/\s+/g, ' ');

  return result;
}

const capitalizeInitial = input => {
  let result = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  return result;
}
