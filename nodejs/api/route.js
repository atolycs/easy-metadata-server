function _roots(fastify, options, done) {
    fastify.register(require('./meta-data/metadata'), { prefix: '/kvm'})
    done()
}

module.exports = _roots