function _roots(fastify, options, done) {
    fastify.register(require('./meta-data/metadata'), { prefix: '/kvm'})
    fastify.get('/kvm', (request, reply) => {
        reply.send('meta-data/')
    })
    
    done()
}

module.exports = _roots