import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';


require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;


// Setup view engine
configViewEngine(app);


// init web routes
initWebRoute(app);



app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
});