export function onRequest(...args) {
  return new Response('hello world!\n' + JSON.stringify(args));
}
