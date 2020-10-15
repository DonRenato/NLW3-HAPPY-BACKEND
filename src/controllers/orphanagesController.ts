import {Request, Response} from 'express';
import { getRepository }from 'typeorm';
import Orphanages from '../models/Orphaneges';
import orphanagesView from '../views/orphanages_view';

export default{

    async index(req: Request, res: Response){
        const orphanagesRepository = getRepository(Orphanages);

        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });

        return res.json(orphanages);
    },

    async show(req: Request, res: Response){
        const { id } = req.params;
        const orphanagesRepository = getRepository(Orphanages);

        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return res.json(orphanagesView.render(orphanage));
    },


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
        const requestImages = req.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        })

    
        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        })
    
        await orphanagesRepository.save(orphanage);
    
        console.log(req.body);
        return res.status(201).json(orphanage);
    }
}