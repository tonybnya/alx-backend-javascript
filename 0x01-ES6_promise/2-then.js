export default function handleResponseFromAPI(promise) {
  const log = (arg) => console.log(arg);
  const text = 'Got a response from the API';

  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => (''))
    .finally(() => log(text));
}
