"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./presentation/server");
const main = () => {
    server_1.Server.start();
};
(() => {
    main();
})();
