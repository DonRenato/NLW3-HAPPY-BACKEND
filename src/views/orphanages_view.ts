import Orphanage from "../models/Orphaneges";

export default {
    render(orphanage: Orphanage){
        return {
            name: orphanage.id,
	        latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends
        };
    }
};