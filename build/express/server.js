"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const ExpressServerBuilder_1 = __importDefault(require("./ExpressServerBuilder"));
function startServer() {
    new ExpressServerBuilder_1.default()
        .open()
        .listen();
}
exports.startServer = startServer;
//# sourceMappingURL=server.js.map