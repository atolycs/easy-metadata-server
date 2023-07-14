const fs = require("fs")

const LIBVIRT_DNSMASQ_DIR = "/var/lib/libvirt/dnsmasq"

function reply_hostname(fastify, options, done) {
    fastify.get('/hostname', (request, reply) => {
        reply.send('this is test')
    })
    done()
}

module.exports = reply_hostname