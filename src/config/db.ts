import {connect, connection} from 'mongoose';

export class db{
    
    private user: string = process.env.MONGO_USER;
    private pass: string = process.env.MONGO_PASS;
    private host: string = process.env.MONGO_HOST;
    private port: string = process.env.MONGO_PORT;
    private database: string = process.env.MONGO_DATABASE
    
    constructor(){
    }

    public conn(): any{
        connect("mongodb://"+this.user+":"
        +this.pass+"@"
        +this.host+":"+this.port+
        "/"+this.database,{useNewUrlParser: true});
        var db = connection;
        db.once('open', () => {
            console.info('Connected to Mongo via Mongoose');
        });
        db.on("error", console.error.bind(console, "MongoDB Connection error"));
    }

}
export default new db();