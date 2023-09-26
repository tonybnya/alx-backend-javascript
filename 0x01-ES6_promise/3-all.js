import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const log = (arg) => console.log(arg);
  const text = 'Signup system offline';

  const promises = [uploadPhoto(), createUser()];

  return Promise
    .all(promises)
    .then((res) => {
      log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => log(text));
}
