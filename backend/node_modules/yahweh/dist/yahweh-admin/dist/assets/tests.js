'use strict';
define('yahweh-admin/tests/app.lint-test', [], function () {
    'use strict';
    QUnit.module('ESLint | app');
    QUnit.test('app.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'app.js should pass ESLint\n\n');
    });
    QUnit.test('components/host-info.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'components/host-info.js should pass ESLint\n\n');
    });
    QUnit.test('resolver.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'resolver.js should pass ESLint\n\n');
    });
    QUnit.test('router.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'router.js should pass ESLint\n\n');
    });
    QUnit.test('routes/dashboard.js', function (assert) {
        assert.expect(1);
        assert.ok(false, 'routes/dashboard.js should pass ESLint\n\n27:5 - Unexpected console statement. (no-console)\n35:11 - \'mem\' is assigned a value but never used. (no-unused-vars)\n45:7 - Unexpected console statement. (no-console)');
    });
    QUnit.test('routes/host.js', function (assert) {
        assert.expect(1);
        assert.ok(false, 'routes/host.js should pass ESLint\n\n23:7 - Unexpected console statement. (no-console)\n39:9 - \'mem\' is assigned a value but never used. (no-unused-vars)');
    });
    QUnit.test('routes/login.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'routes/login.js should pass ESLint\n\n');
    });
});
define('yahweh-admin/tests/helpers/destroy-app', ['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = destroyApp;
    function destroyApp(application) {
        Ember.run(application, 'destroy');
    }
});
define('yahweh-admin/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'yahweh-admin/tests/helpers/start-app', 'yahweh-admin/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = function (name) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, _qunit.module)(name, {
            beforeEach: function beforeEach() {
                this.application = (0, _startApp.default)();
                if (options.beforeEach) {
                    return options.beforeEach.apply(this, arguments);
                }
            },
            afterEach: function afterEach() {
                var _this = this;
                var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
                return resolve(afterEach).then(function () {
                    return (0, _destroyApp.default)(_this.application);
                });
            }
        });
    };
    var resolve = Ember.RSVP.resolve;
});
define('yahweh-admin/tests/helpers/resolver', ['exports', 'yahweh-admin/resolver', 'yahweh-admin/config/environment'], function (exports, _resolver, _environment) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var resolver = _resolver.default.create();
    resolver.namespace = {
        modulePrefix: _environment.default.modulePrefix,
        podModulePrefix: _environment.default.podModulePrefix
    };
    exports.default = resolver;
});
define('yahweh-admin/tests/helpers/start-app', ['exports', 'yahweh-admin/app', 'yahweh-admin/config/environment'], function (exports, _app, _environment) {
    'use strict';
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = startApp;
    function startApp(attrs) {
        var attributes = Ember.merge({}, _environment.default.APP);
        attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;
        return Ember.run(function () {
            var application = _app.default.create(attributes);
            application.setupForTesting();
            application.injectTestHelpers();
            return application;
        });
    }
});
define('yahweh-admin/tests/integration/components/host-info-test', ['ember-qunit'], function (_emberQunit) {
    'use strict';
    (0, _emberQunit.moduleForComponent)('host-info', 'Integration | Component | host info', {
        integration: true
    });
    (0, _emberQunit.test)('it renders', function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.on('myAction', function(val) { ... });
        this.render(Ember.HTMLBars.template({
            "id": "kV6lsxCL",
            "block": "{\"symbols\":[],\"statements\":[[1,[18,\"host-info\"],false]],\"hasEval\":false}",
            "meta": {}
        }));
        assert.equal(this.$().text().trim(), '');
        // Template block usage:
        this.render(Ember.HTMLBars.template({
            "id": "km6+d0XS",
            "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"host-info\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
            "meta": {}
        }));
        assert.equal(this.$().text().trim(), 'template block text');
    });
});
define('yahweh-admin/tests/test-helper', ['yahweh-admin/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
    'use strict';
    (0, _emberQunit.setResolver)(_resolver.default);
    (0, _emberCliQunit.start)();
});
define('yahweh-admin/tests/tests.lint-test', [], function () {
    'use strict';
    QUnit.module('ESLint | tests');
    QUnit.test('helpers/destroy-app.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
    });
    QUnit.test('helpers/module-for-acceptance.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
    });
    QUnit.test('helpers/resolver.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
    });
    QUnit.test('helpers/start-app.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
    });
    QUnit.test('integration/components/host-info-test.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'integration/components/host-info-test.js should pass ESLint\n\n');
    });
    QUnit.test('test-helper.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'test-helper.js should pass ESLint\n\n');
    });
    QUnit.test('unit/routes/dashboard-test.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'unit/routes/dashboard-test.js should pass ESLint\n\n');
    });
    QUnit.test('unit/routes/host-test.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'unit/routes/host-test.js should pass ESLint\n\n');
    });
    QUnit.test('unit/routes/login-test.js', function (assert) {
        assert.expect(1);
        assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
    });
});
define('yahweh-admin/tests/unit/routes/dashboard-test', ['ember-qunit'], function (_emberQunit) {
    'use strict';
    (0, _emberQunit.moduleFor)('route:dashboard', 'Unit | Route | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
    });
    (0, _emberQunit.test)('it exists', function (assert) {
        var route = this.subject();
        assert.ok(route);
    });
});
define('yahweh-admin/tests/unit/routes/host-test', ['ember-qunit'], function (_emberQunit) {
    'use strict';
    (0, _emberQunit.moduleFor)('route:host', 'Unit | Route | host', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
    });
    (0, _emberQunit.test)('it exists', function (assert) {
        var route = this.subject();
        assert.ok(route);
    });
});
define('yahweh-admin/tests/unit/routes/login-test', ['ember-qunit'], function (_emberQunit) {
    'use strict';
    (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
    });
    (0, _emberQunit.test)('it exists', function (assert) {
        var route = this.subject();
        assert.ok(route);
    });
});
require('yahweh-admin/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.js.map