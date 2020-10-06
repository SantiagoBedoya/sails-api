var url = 'http://localhost:1337';
var request = require('supertest')(url);

describe('DeliveryController', function () {
    it("Get all records of deliveries", function (done) {
        var req = request.get("/delivery/");
        req.expect(200);
        req.end(function (err, res) {
            if(err){
                throw err;
            }
            console.log(res.text);
            done();
        });
    }),
    it("Insert new record into deliveries", function (done) {
        var req = request.post("/delivery/");
        req.send({
            lat: "5.036131",
            lng: "-75.452186",
            route: "1",
            name: "Delivery test",
        });
        req.expect(200);
        req.end(function (err, res) {
            if(err){
                throw err;
            }
            console.log(res.text);
            done();
        });
    }),
    it("Update one record of deliveries", function (done) {
        var req = request.patch("/delivery/1");
        req.send({
            lat: "5.036131",
            lng: "-75.452186",
            route: "1",
            name: "Delivery test 2",
        });
        req.expect(200);
        req.end(function (err, res) {
            if(err){
                throw err;
            }
            console.log(res.text);
            done();
        });
    }),
    it("Delete one record of deliveries", function (done) {
        var req = request.delete("/delivery/1");
        req.expect(200);
        req.end(function (err, res) {
            if(err){
                throw err;
            }
            console.log(res.text);
            done();
        });
    })
});