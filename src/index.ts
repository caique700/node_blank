import './common/env';
import Server from './common/server';
import routes from './routes';
import {connect, connection} from 'mongoose';
const port = parseInt(process.env.PORT);

/* connect("mongodb://localhost/teste",{useNewUrlParser: true});
var db = connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("CONEXÂO COM BANCO ABERTA");
}); */

export default new Server()
  .router(routes)
  .listen(port);
