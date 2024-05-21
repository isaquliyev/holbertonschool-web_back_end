import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const newPromise = Promise.all([uploadPhoto, createUser]);
  return newPromise
    .then((body) => {
      const [photo, user] = body;
      console.log(`${photo.value.body} ${user.value.firstName} ${user.value.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
