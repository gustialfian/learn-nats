const NATS = require('nats')
const nc = NATS.connect()

function replyMsg(topic, cb) {
  nc.subscribe(topic, (msg, reply, subject, sid) => {
    if (!reply) {
      return
    }
    const req = { msg, reply, subject, sid }
    const res = (msg) => {
      nc.publish(reply, msg)
    }
    cb(req, res)
  })
}

replyMsg('request', (req, res) => {
  console.log(`req`, req)
  return res('hello')
})

console.log(`listening`)