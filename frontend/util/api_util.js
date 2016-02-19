var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchBenches: function(){
    $.ajax({
        url: "api/benches",
        success: function (benches) {
          ApiActions.receiveAllBenches(benches);
        }
      })
  }
}



module.exports = ApiUtil;
