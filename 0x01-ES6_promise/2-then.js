export default function handleResponseFromAPI(promise) {
  const log = (arg) => console.log(arg);
  const text = 'Got a response from the API';

  // eslint-disable-next-line no-unused-vars
  promise.then((response) => {
    log(text);
    return { status: 200, body: 'Success' };
  }).catch((err) => {
    log(text);
    return err;
  });
}
