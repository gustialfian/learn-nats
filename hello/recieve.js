const NATS = require('nats')
const nc = NATS.connect()

// Simple Subscriber
console.log(`subscribe: foo`)
nc.subscribe('foo', function (msg) {
  console.log('Received a message: ' + msg)
})

console.log(`reply: request`)
nc.subscribe('request', (msg, reply, subject, sid) => {
  if (reply) {
    nc.publish(reply, 'got ' + msg + ' on ' + subject + ' in subscription id ' + sid)
    return
  }
  console.log('Received a message: ' + msg + " it wasn't a request.")
})