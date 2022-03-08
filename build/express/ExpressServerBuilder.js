"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class ExpressServerBuilder {
    constructor() {
        this._port = 3000;
        this._app = (0, express_1.default)();
    }
    open() {
        this._app.post('/api/webhook', (req, res) => {
            console.log(req.body);
            return res.status(200).json({ success: "Route hit" });
        });
        return this;
    }
    listen() {
        this._app.listen(this._port, () => console.log(`Server listening on ${this._port}`));
    }
}
exports.default = ExpressServerBuilder;
//# sourceMappingURL=ExpressServerBuilder.js.map