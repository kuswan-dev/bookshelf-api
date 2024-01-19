/* eslint-disable no-console */
import Hapi from '@hapi/hapi'
import { bookRoutes } from './routes/bookRoutes.js'

async function init() {
    const host = 'localhost'
    const port = 9000

    const server = Hapi.server({ host, port })

    server.route(bookRoutes)
    await server.start()
    console.log('Server running on', server.info.uri)
}

init()
