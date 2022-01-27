import { CIDR } from "../../types";

export const toCIDR = (
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  mask: number
): CIDR => {
  return `${p1}.${p2}.${p3}.${p4}/${mask}` as const;
};

export const fromCIDR = (
  cidr: CIDR
): [number, number, number, number, number] => {
  const parts = cidr.split(/[./]/).map((p) => parseInt(p));

  if (parts.length !== 5) {
    throw new Error("Bad CIDR!");
  }

  return [parts[0], parts[1], parts[2], parts[3], parts[4]];
};
