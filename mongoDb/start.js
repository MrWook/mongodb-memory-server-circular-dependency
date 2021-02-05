const { MongoClient } = require('mongodb')

module.exports =  async () => {
  const client = new MongoClient(`mongodb://localhost:27017`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    authSource: 'pushNotifications',
    appname: 'someApp',
  })

  await client.connect()

  return client
}
