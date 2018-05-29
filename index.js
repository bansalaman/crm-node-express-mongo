import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    //if there are updations in mongo it will not show error or warnings
    useMongoClient:true
});

//bodyParsersetup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/',(req,res) => 
    res.send(`Node and Express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is runnning on the port ${PORT}`)
);