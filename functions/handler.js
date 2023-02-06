addEventListener('fetch', event => {
  event.respondWith(onRequest(event.request))
})

export async function onRequest(request) {
  new WebSocket('wss://demo.piesocket.com/v3/channel_123')
  return new Response('Hello')
}
