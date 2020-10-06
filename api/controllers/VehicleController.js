/**
 * VehicleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    async find(req, res){
        try {
            let vehicles = await Vehicle.find().populate('history');
            let lastHistory = {createdAt: 0, lat: 0, lng: 0};
            vehicles.forEach(vehicle => {
                vehicle.history.forEach(history => {
                    if(history.createdAt > lastHistory.createdAt){
                        lastHistory = {createdAt: history.createdAt, lat: history.lat, lng: history.lng};
                    }
                })
                if(lastHistory.createdAt != 0){
                    vehicle.current_lat = lastHistory.lat
                    vehicle.current_lng = lastHistory.lng
                }
            });
            return res.ok(vehicles);
        } catch (error) {
            return res.serverError({error});
        }
    },
    async addHistory(req, res){
        try {
            let {vehicleId, lat, lng} = req.allParams();
            let history = await VehicleHistory.create({
                vehicle: vehicleId,
                lat,
                lng
            }).fetch();
            return res.ok(history);
        } catch (error) {
            return res.serverError({error});
        }
    }
};

