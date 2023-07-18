module_metadata = {
    name: "instance-id",
    description: "get Instance ID"
}

const fs = require("fs")
const path = require("path")
const LIBVIRT_DNSMASQ_DIR = "/var/lib/libvirt/dnsmasq"


function reply_instanceid(fastify, options, done) {
    fastify.get('/instance-id', (request, reply) => {
        reply.send("this is test instance-id!")
    })
    done()
}
reply_instanceid[Symbol.for("name")] = module_metadata.name

module.exports = reply_instanceid