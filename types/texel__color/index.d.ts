export type Coords = [number, number, number];

export interface BaseColorSpace {
  id: string;
  base?: BaseColorSpace;
}

export interface ColorSpace extends BaseColorSpace {
  toBase?: (input: Coords, out?: Coords) => Coords;
  fromBase?: (input: Coords, out?: Coords) => Coords;
}

export type XYZColorMatrix = [
  [number, number, number],
  [number, number, number],
  [number, number, number],
];

export interface XYZColorSpace extends BaseColorSpace {
  toXYZ_M: XYZColorMatrix;
  fromXYZ_M: XYZColorMatrix;
  toLMS_M: XYZColorMatrix;
  fromLMS_M: XYZColorMatrix;
}

// srgb
export const sRGB: ColorSpace;
export const sRGBLinear: XYZColorSpace;

// oklab
export const OKLab: ColorSpace;
export const OKLCH: ColorSpace;
export const OKHSL: ColorSpace;
export const OKHSV: ColorSpace;

export function convert(
  input: Coords,
  fromSpace: ColorSpace,
  toSpace: ColorSpace
): Coords;

export function serialize(
  coords: Coords,
  inputSpace: ColorSpace,
  outputSpace?: ColorSpace
): string;

export function deserialize(colorString: string): ColorInfo;

export interface ColorInfo {
  id: ColorSpace['id'];
  coords: Coords;
}
