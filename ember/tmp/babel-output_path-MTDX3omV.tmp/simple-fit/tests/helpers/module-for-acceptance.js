define('simple-fit/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'simple-fit/tests/helpers/start-app', 'simple-fit/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _simpleFitTestsHelpersStartApp, _simpleFitTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _simpleFitTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _simpleFitTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});