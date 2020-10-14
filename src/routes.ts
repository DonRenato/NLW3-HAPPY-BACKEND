import { Router } from 'express';
import { getRepository }from 'typeorm';
import Orphanages from './models/Orphaneges';

const routes = Router();

routes.get('/', (req,res)=>{
    res.json("Hello World");
})

routes.post('/orphanages', async (req, res)=>{
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = req.body;

    const orphanagesRepository = getRepository(Orphanages);

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    })

    await orphanagesRepository.save(orphanage);

    console.log(req.body);
    return res.sendStatus(201).json(orphanage);
})

export default routes;