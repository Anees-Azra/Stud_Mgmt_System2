"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ember_qunit_1 = require("ember-qunit");
const htmlbars_inline_precompile_1 = require("htmlbars-inline-precompile");
ember_qunit_1.moduleForComponent('host-info', 'Integration | Component | host info', {
    integration: true
});
ember_qunit_1.test('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.render(htmlbars_inline_precompile_1.default `{{host-info}}`);
    assert.equal(this.$().text().trim(), '');
    // Template block usage:
    this.render(htmlbars_inline_precompile_1.default `
    {{#host-info}}
      template block text
    {{/host-info}}
  `);
    assert.equal(this.$().text().trim(), 'template block text');
});
//# sourceMappingURL=host-info-test.js.map