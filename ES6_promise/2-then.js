export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    reject(new Error('The fake API is not working currently'));
  });
  promise.then(console.log('Got a response from the API'));
  return promise;
}
