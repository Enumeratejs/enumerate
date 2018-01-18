const expect = require('expect');
const enumerate = require('../');

describe('enumerate.filter()', function() {

  it('filters by string', function(done) {
    let filtered = enumerate.filter({id1: 1, id2: 2, similarid1: 1}, ['id1']);

    expect(filtered).toEqual({id1: 1});

    done();
  });

  it('filters by dictionary', function(done) {
    let filtered = enumerate.filter({id1: 1, id2: 2, similarid1: 1}, [{regex: 'id1'}]);

    expect(filtered).toEqual({id1: 1});

    done();
  });

  it('filters by regex', function(done) {
    let filtered = enumerate.filter({id1: 1, id2: 2}, [/id\d/]);

    expect(filtered).toEqual({id1: 1, id2: 2});

    done();
  });

  it('applies null filter', function(done) {
    let filtered = enumerate.filter({a: 1, ' ': 2});

    expect(filtered).toEqual({a: 1, ' ': 2});

    done();
  });

});
