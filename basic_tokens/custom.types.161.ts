import { Enum, Struct } from "@polkadot/types/codec";
import { Registry } from "@polkadot/types/types";
import { Text, u8 } from "@polkadot/types/primitive";
import { AccountId } from '@polkadot/types/interfaces';
import { RawAmount } from "../custom.types.161";

export class HashAlgorithm extends Enum {
    constructor(registry: Registry, value: any) {
        super(registry, [
            'MD5',
            'SHA1',
            'SHA2_224',
            'SHA2_256',
            'SHA2_384',
            'SHA2_512',
            'SHA512_224',
            'SHA512_256',
            'SHA3_224',
            'SHA3_256',
            'SHA3_384',
            'SHA3_512',
            'BLAKE2b_256',
            'BLAKE2b_384',
            'BLAKE2b_512',
            'Keccak_256',
            'Keccak_512',
        ], value);
    }
}

export class BasicToken extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            symbol: "Text",
            name: "Text",
            total_supply: RawAmount,
            decimals: "u8",
            owner: "AccountId",
        }, value);
    }

    public get symbol(): Text {
        return this.get('symbol') as Text;
    }

    public get name(): Text {
        return this.get('name') as Text;
    }

    public get totalSupply(): RawAmount {
        return this.get('total_supply') as RawAmount;
    }

    public get decimals(): u8 {
        return this.get('decimals') as u8;
    }

    public get owner(): AccountId {
        return this.get('owner') as AccountId;
    }
}

export function test() {
    console.log("test success");
}