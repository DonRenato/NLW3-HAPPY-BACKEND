import Orphanage from "../models/Orphaneges";
import imagesView from "./images_view";

export default {
    render(orphanage: Orphanage){
        return {
            name: orphanage.id,
	        latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: imagesView.renderMany(orphanage.images)        };
    },
    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage));
    }
};