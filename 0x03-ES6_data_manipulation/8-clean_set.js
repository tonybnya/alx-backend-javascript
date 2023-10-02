export default function cleanSet(set, startString) {
  const string = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const item of set.values()) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      const str = item.substring(startString.length);

      if (str && str !== item) {
        string.push(str);
      }
    }
  }

  return string.join('-');
}
