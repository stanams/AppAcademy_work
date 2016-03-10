var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchStore = new Store(AppDispatcher);
var BenchConstants = require('../constants/bench_constants');

var _benches = [];

BenchStore.all = function () {
  return _benches;
};

function resetBench(bench) {
  _benches[bench.id] = bench;
}

function resetBenches(benches) {
  _benches = {};
  benches.forEach(function(bench, i) {
    resetBench(bench);
  });
}

BenchStore.__onDispatch = function (payload) {
switch(payload.actionType) {
  case BenchConstants.BENCHES_RECEIVED:
    resetBenches(payload.benches);
    BenchStore.__emitChange();
    break;
  }
}



module.exports = BenchStore;
