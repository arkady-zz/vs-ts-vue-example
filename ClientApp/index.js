"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ClientApp/index.ts
var vue_1 = require("vue");
var AppHello_vue_1 = require("./components/AppHello.vue");
var v = new vue_1.default({
    el: "#app-root",
    template: '<AppHelloComponent />',
    //render: h => h(AppHelloComponent),
    components: {
        AppHelloComponent: AppHello_vue_1.default
    }
});
//# sourceMappingURL=index.js.map