export default function ato(promise) {
  return promise.then(res => [null, res]).catch(err => [err]);
}
