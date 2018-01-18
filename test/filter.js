const expect = require('expect');
const enumerate = require('../lib/');

describe('enumerate.filter()', function() {

  it('filters basic identity set', function(done) {
    let filtered = enumerate.filter({}, {});

    expect(filtered).toEqual({});

    done();
  });

  it('applies null filter', function(done) {
    let filtered = enumerate.filter({}, null);

    expect(filtered).toEqual({});

    done();
  });

});
