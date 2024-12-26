import { convert, OKLCH, sRGB, serialize, deserialize } from "@texel/color";

const rgb = convert([0.5, 0.15, 30], OKLCH, sRGB); // $ExpectType Coords
serialize(rgb, sRGB); // $ExpectType string
serialize(rgb, sRGB, OKLCH); // $ExpectType string

const colorInfo = deserialize(""); // $ExpectType ColorInfo
colorInfo.coords // $ExpectType Coords
colorInfo.id // $ExpectType string