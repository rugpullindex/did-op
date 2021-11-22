//@format
import test from "ava";

import { v3 } from "../src/index.mjs";
const { fromDID, toDID } = v3;

test("if did can be made to valid token address", t => {
  const did = "did:op:7Bce67697eD2858d0683c631DdE7Af823b7eea38";
  const expected = "0x7Bce67697eD2858d0683c631DdE7Af823b7eea38";
  t.is(fromDID(did), expected);
});

test("if address can be made to valid did", t => {
  const address = "0x7bce67697ed2858d0683c631dde7af823b7eea38";
  const expected = "did:op:7Bce67697eD2858d0683c631DdE7Af823b7eea38";
  t.is(toDID(address), expected);
});
