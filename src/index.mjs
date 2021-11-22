// @format
import { toChecksumAddress } from "ethereum-checksum-address";

export const v3 = {
  fromDID(did) {
    return did.replace("did:op:", "0x");
  },

  toDID(address) {
    address = toChecksumAddress(address);
    return address.replace("0x", "did:op:");
  }
};
