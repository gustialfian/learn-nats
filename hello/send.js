const NATS = require('nats')
const nc = NATS.connect()

nc.on('connect', () => {
  console.log(`nats connected`)

  console.log(`publish: foo`)
  nc.publish('foo', 'Hello World!')

  console.log(`request: request`)
  nc.request('request', (msg) => {
    console.log('Got a response in msg stream: ' + msg)
  })
})