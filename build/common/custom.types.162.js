"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeDbWeight = void 0;
const codec_1 = require("@polkadot/types/codec");
var custom_types_161_1 = require("./custom.types.161");
Object.defineProperty(exports, "RawAmount", { enumerable: true, get: function () { return custom_types_161_1.RawAmount; } });
Object.defineProperty(exports, "TokenId", { enumerable: true, get: function () { return custom_types_161_1.TokenId; } });
class RuntimeDbWeight extends codec_1.UInt {
    constructor(registry, value) {
        super(registry, value, 128);
    }
}
exports.RuntimeDbWeight = RuntimeDbWeight;
//# sourceMappingURL=custom.types.162.js.map