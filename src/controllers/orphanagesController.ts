import {Request, Response} from 'express';
import { getRepository }from 'typeorm';
import Orphanages from '../models/Orphaneges'

export default{
    async create(req: Request, res: Response){
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
        return res.status(201).json(orphanage);
    }
}