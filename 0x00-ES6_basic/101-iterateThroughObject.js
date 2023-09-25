export default function iterateThroughObject(reportWithIterator) {
  const lst = [];

  for (const item of reportWithIterator) {
    lst.push(item);
  }

  return lst.join(' | ');
}
