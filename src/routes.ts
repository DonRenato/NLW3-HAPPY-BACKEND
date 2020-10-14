import { Router } from 'express';

const routes = Router();

routes.get('/', (req,res)=>{
    res.json("Hello World");
})

routes.post('/orphanages', async (req, res)=>{
    
})

export default routes;