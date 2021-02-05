const { MongoMemoryServer } = require('mongodb-memory-server')
// const startMongoDb = require('./mongoDb/start')

module.exports = async () => {
  global.mongoDb = await MongoMemoryServer.create({
    instance: {
      dbName: 'jestDatabaseName',
      port: 56490,
    },
  })

  // global.client = await startMongoDb()
}
