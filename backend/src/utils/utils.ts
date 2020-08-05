export const to = <T>(promise: Promise<T>) =>
  promise.then((res) => [null, res]).catch((err) => [err]);
