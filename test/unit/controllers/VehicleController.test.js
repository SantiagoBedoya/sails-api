var url = 'http://localhost:1337';
var request = require('supertest')(url);

describe('VehicleController', function () {
    it("Get all records of vehicles", function (done) {
        var req = request.get("/vehicle/");
        req.expect(200);
        req.end(function (err, res) {
            if(err){
                throw err;
            }
            console.log(res.text);
            done();
        });
    }),
    it("Insert new record into vehicles", function (done) {
        var req = request.post("/vehicle/");
        req.send({
            brand: 'Nissan',
            capacity: 30
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
    it("Update one record of vehicle", function (done) {
        var req = request.patch("/vehicle/1");
        req.send({
            brand: 'Nissan',
            capacity: 30
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
    it("Add history record of vehicle", function (done) {
        var req = request.post("/vehicle/1/addHistory");
        req.send({
            lat: '5.034818',
            lng: '-75.451262'
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
    it("Delete one record of vehicle", function (done) {
        var req = request.delete("/vehicle/1");
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