export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'success' });
    reject(new Error());
  });
  promise.then(console.log('Got a response from the API'));
  return promise;
}
