const {calcDistance} = require('../services/distanceService');
/**
 * RouteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async find(req, res){
        try {
            let routes = await Route.find().populate('deliveries');
            routes.forEach(route => {
                route.deliveries.map(delivery => {
                    let distance = calcDistance(route.start_lat, route.start_lng, delivery.lat, delivery.lng);
                    delivery.distance = distance;
                })
            });
            routes.forEach(route => {
                route.deliveries.sort((a, b) => {
                    return a.distance - b.distance
                })
            });
            return res.ok(routes);
        } catch (error) {
            return res.serverError({error});
        }
    },
    async create(req, res){
        try {
            let {start_lat, start_lng, end_lat, end_lng, vehicles} = req.allParams();
            const route = await Route.create({
                start_lat,
                start_lng,
                end_lat,
                end_lng
            }).fetch();
            await Route.addToCollection(route.id, 'vehicles', vehicles);
            return res.ok(route);
        } catch (error) {
            return res.serverError({error});
        }
    }
};

