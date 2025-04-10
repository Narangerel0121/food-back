"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = exports.getOrder = void 0;
const Order_1 = require("../schema/Order");
const getOrder = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield Order_1.Order.find();
    res.json({ success: true, order });
});
exports.getOrder = getOrder;
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield Order_1.Order.create(req.body);
    res.json({ message: "Created order successfully", order });
});
exports.createOrder = createOrder;
//# sourceMappingURL=order.js.map