export default function returnHowManyArguments(...args) {
  let numArgs = 0;

  // eslint-disable-next-line no-unused-vars
  for (const arg of args) {
    numArgs += 1;
  }
  return numArgs;
}
