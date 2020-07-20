import { UInt } from "@polkadot/types/codec";
import { Registry, AnyNumber } from "@polkadot/types/types";

export { RawAmount, TokenId } from "./custom.types.161"; 

export class RuntimeDbWeight extends UInt {
    constructor(registry: Registry, value?: AnyNumber) {
        super(registry, value, 128);
    }
}