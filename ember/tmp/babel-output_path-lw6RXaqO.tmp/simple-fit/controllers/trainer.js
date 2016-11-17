define("simple-fit/controllers/trainer", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({
    actions: {
      addclient: function addclient() {
        console.log("sup ya'll. I just actioned this");
      }
    }
  });
});