import * as jsonServer from 'json-server';
import * as minimist from 'minimist';
import { db } from './db';
import { routes } from './routes';

// setup config
const argv = minimist(process.argv.slice(2));
const host = argv.host || 'localhost';
const port = argv.port || '4210';

// create server
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// middlewares
server.use(middlewares);
server.use(jsonServer.bodyParser);

// connect db and custom routes
const router = jsonServer.router(db);
routes.forEach(({path, method, handler}) => server[method.toLowerCase()](path, handler));
server.use(router);

// run server
server.listen(port, host, () => {
  console.log(`Dev API is running at http://${host}:${port}...`);
});
