export default function appendToEachArrayValue(array, appendString) {
  const lst = [];

  for (const item of array) {
    lst.push(`${appendString}${item}`);
  }

  return lst;
}
