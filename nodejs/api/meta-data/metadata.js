const fs = require("fs")
const path = require("path")
const module_path = fs.readdirSync(__dirname).filter((v) => !v.endsWith('.js'))

function _metadata(fastify, options, done) {
    //const __thisistest = require('./hostname/hostname')
    let module_list = new Array()
    for ( const folder of module_path) {
        const module_folder = path.join(__dirname, folder);
        const module_files = fs.readdirSync(module_folder).filter(file => file.endsWith('.js'))
        for ( const file of module_files ) {
            const filePath = path.join(module_folder, file);
            const module = require(filePath)
            module_list.push(module[Symbol.for("name")])
            fastify.register(module, { prefix: `/${module[Symbol.for("name")]}`})
        }
    }

    //fastify.register(require('./hostname/hostname'), { prefix: '/meta-data'})
    fastify.get('/meta-data', (request, reply) => {
        reply.send(`${module_list.join('\n')}/`)
    })
    done()
}

module.exports = _metadata