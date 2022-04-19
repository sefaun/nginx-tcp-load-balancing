const broker = require('aedes')()
const server = require('http').createServer()
require('websocket-stream').createServer({ server }, broker.handle)

const port = 1881

server.listen(port, function () {
  console.log(`Websocket MQTT Broker Listening on Port ${port}`)
})


broker.on('client', function (client) {
  try {
     if (client) {
        console.log(client.id)
     }
  } catch (err) {
    console.log("Client Error -> ", err)
  }
})


broker.on('publish', function (packet, client) {
  try {
     if (client) {
        console.log(packet)
     }
  } catch (err) {
    console.log("Client Error -> ", err)
  }
})
