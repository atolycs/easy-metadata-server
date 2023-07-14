const fastify = require("fastify")( {
    logger: true
});

const fs = require("fs")

fastify.register(require('./api/route'))

fastify.listen({ port: 3000, host: "169.254.169.254"}, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    } else {
        fastify.log.info(address)
    }
})