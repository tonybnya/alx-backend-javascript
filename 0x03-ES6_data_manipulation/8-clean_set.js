export default function cleanSet(set, startString) {
  let string = '';

  if (startString === '') {
    return '';
  }

  for (const item of set.values()) {
    if (item.startsWith(startString)) {
      const str = item.substring(startString.length, item.length);
      string += `${str}-`;
    }
  }

  return string.slice(0, -1);
}
