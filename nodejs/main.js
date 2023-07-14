const fastify = require("fastify")( {
    logger: true
});

const fs = require("fs")

/*fastify.get('/', function (request, reply) {
    reply.send({ hello:'world' })
})*/
fastify.register(require('./api/route'))

fastify.listen({ port: 3000}, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    } else {
        fastify.log.info(address)
    }
})