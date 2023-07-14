const fs = require("fs")
const path = require("path")
const LIBVIRT_DNSMASQ_DIR = "/var/lib/libvirt/dnsmasq"

function getLibvirtHostname(ip_address) {
    let dnsmasq_ip_raw = JSON.parse(fs.readFileSync(path.join(LIBVIRT_DNSMASQ_DIR,"virbr0.status")))
    let dnsmasq_mac_raw =  JSON.parse(fs.readFileSync(path.join(LIBVIRT_DNSMASQ_DIR,"virbr0.macs")))
    instance_mac = dnsmasq_ip_raw.find((v) => v["ip-address"] == ip_address)["mac-address"]
    return dnsmasq_mac_raw.find((v) => v.macs == instance_mac).domain
}

function reply_hostname(fastify, options, done) {
    fastify.get('/hostname', (request, reply) => {
        reply.send(getLibvirtHostname(request.raw.connection.remoteAddress))
    })
    done()
}

module.exports = reply_hostname