var pg = require('pg')
  , should = require('should');


describe("PostgreSQL", function() {
  it("Should connect to server passed by Strider via environment variables", function(done) {
    var uri = process.env.POSTGRESQL_URI;
    pg.connect(uri, function(err, client) {
      client.query("SELECT NOW() as when", function(err, result) {
        var year = result.rows[0].when.getYear();
        var d = new Date();
        year.should.eql(d.getFullYear());
        done();
      });

    });
  });
});
