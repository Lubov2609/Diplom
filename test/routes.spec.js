process.env.NODE_ENV = 'test';

var chai = require('chai');
 should =chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/db');
chai.use(chaiHttp);

describe('API Routes', function() {

    beforeEach(function (done) {
        knex.migrate.rollback()
            .then(function () {
                knex.migrate.latest()
                    .then(function () {
                        return knex.seed.run()
                            .then(function () {
                                done();
                            });
                    });
            });
    });

    afterEach(function (done) {
        knex.migrate.rollback()
            .then(function () {
                done();
            });
    });

    describe('GET /api/v1/years', function () {
        it('should return all years', function (done) {
            chai.request(server)
                .get('/api/v1/years')
                .end(function (err, res) {

                    res.should.have.status(200);
                    res.should.be.json; // jshint ignore:line
                    res.body.should.be.a('array');
                    res.body.length.should.equal(5);
                    res.body[0].should.have.property('id');
                    res.body[0].id.should.equal(1);
                    res.body[0].should.have.property('year_name');
                    res.body[0].year_name.should.equal(2020);
                    done();
                });
        });
    });
});
//     describe('GET /api/v1/years/:id', function() {
//         it('should return a signal year', function(done) {
//             chai.request(server)
//                 .get('/api/v1/years/1')
//                 .end(function (err, res) {
//                     res.should.have.status(200);
//                     res.should.be.json; // jshint ignore:line
//                     res.body.should.be.a('object');
//                     res.body.should.have.property('id');
//                     res.body.id.should.equal(1);
//                     res.body.should.have.property('year_name');
//                     res.body.year_name.should.equal(2021);
//                     done();
//                 });
//             });
//         });
// describe('POST /api/v1/years', function() {
//     it('should add a year', function(done) {
//         chai.request(server)
//             .post('/api/v1/years')
//             .send({
//                 id:1,
//                 year_name:2020
//             })
//             .end(function(err, res) {
//                 res.should.have.status(200);
//                 res.should.be.json; // jshint ignore:line
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('id');
//                 res.body.id.should.equal(1);
//                 res.body.should.have.property('year_name');
//                 res.body.year_name.should.equal(2021);
//                 done();
//             });
//     });
// });