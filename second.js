const broker = require('aedes')()
const server = require('net').createServer(broker.handle)


const port = 1881

broker.on('client', function (client) {
  try {
    console.log("second")
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

server.listen(port, function () {
  console.log(`MQTT Broker Listening on Port ${port}`)
})