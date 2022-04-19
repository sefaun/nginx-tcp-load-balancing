const broker = require('aedes')()
const server = require('net').createServer(broker.handle)

const port = 1890

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
