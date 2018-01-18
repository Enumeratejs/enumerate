const expect = require('expect');
const enumerate = require('../');

describe('enumerate.merge()', function() {
  it('merges keys of identity maps', function(done) {
    let filtered = enumerate.merge({id1: {}}, {id2: {}});

    expect(filtered).toEqual({id1: {}, id2: {}});

    done();
  });

  it('merges properties of conflicting identity maps', function(done) {
    let filtered = enumerate.merge({id1: {name: 'name1', key1: 1}}, {id1: {name: 'name2', key2: 2}});

    expect(filtered).toEqual({id1: {name: 'name2', key1: 1, key2: 2}});

    done();
  });
});
