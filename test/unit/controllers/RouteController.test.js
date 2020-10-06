var url = 'http://localhost:1337';
var request = require('supertest')(url);

describe('RouteController', function () {
    it("Get all records of routes", function (done) {
        var req = request.get("/route/");
        req.expect(200);
        req.end(function (err, res) {
            if(err){
                throw err;
            }
            console.log(res.text);
            done();
        });
    }),
    it("Insert new record into routes", function (done) {
        var req = request.post("/route/");
        req.send({
            start_lat: "5.036131",
            start_lng: "-75.452186",
            end_lat: "5.047257",
            end_lng: "-75.516731",
            vehicles: [1]
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
    it("Update one record of routes", function (done) {
        var req = request.patch("/route/1");
        req.send({
            start_lat: "5.036132",
            start_lng: "-75.452186",
            end_lat: "5.047257",
            end_lng: "-75.516731",
            vehicles: [1]
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
    it("Delete one record of routes", function (done) {
        var req = request.delete("/route/1");
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