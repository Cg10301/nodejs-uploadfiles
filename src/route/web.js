import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/about', (req, res)=>{
        res.send(`I'm Cuong Minh`);
    });

    return app.use('/', router);
}

export default initWebRoute;
