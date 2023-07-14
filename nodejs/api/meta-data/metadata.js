function _metadata(fastify, options, done) {
    fastify.register(require('./hostname/hostname'), { prefix: '/meta-data'})
    fastify.get('/meta-data', (request, reply) => {
        reply.send('instance-id\nhostname\npublic-keys/')
    })
    done()
}

module.exports = _metadata