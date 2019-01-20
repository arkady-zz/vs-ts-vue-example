"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ClientApp/components/AppHello.ts
var vue_1 = require("vue");
var Hello_vue_1 = require("./Hello.vue");
exports.default = vue_1.default.extend({
    data: function () {
        return {
            name: "World"
        };
    },
    components: {
        HelloComponent: Hello_vue_1.default
    }
});
//# sourceMappingURL=AppHello.js.map