const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

    test('GET request to /api/convert?input=10L',(done)=>{
        chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=10L')
        .end((err,res)=>{
            assert.equal(res.status,200)
            done()
        })
    })
    test('GET request to /api/convert?input=32g',(done)=>{
        chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=32g')
        .end((err,res)=>{
            assert.equal(res.status,200)
            done()
        })
    })
    test('GET request to /api/convert?input=3/7.2/4kg',(done)=>{
        chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=3/7.2/4kg')
        .end((err,res)=>{
            assert.equal(res.status,200)
            done()
        })
    })
    test('GET request to /api/convert?input=3/7.2/4kilomegagram',(done)=>{
        chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=3/7.2/4kilomegagram')
        .end((err,res)=>{
            assert.equal(res.status,200)
            done()
        })
    })
    test('GET request to /api/convert?input=kg',(done)=>{
        chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=kg')
        .end((err,res)=>{
            assert.equal(res.status,200)
            done()
        })
    })

});