const NATS = require('nats')
const nc = NATS.connect()

function reqMsg(topic, msg) {
  return new Promise((resolve, reject) => {
    nc.request(topic, msg, { max: 1, timeout: 1000 }, (val) => {
      if (msg instanceof NATS.NatsError && msg.code === NATS.REQ_TIMEOUT) {
        return reject("Request timeout")
      } 
      return resolve(val)
    })
  })
}

(async function () {
  const data = await reqMsg('request', 'percobaaan dari mana saja')
  console.log(`data dari service`, data)
})()