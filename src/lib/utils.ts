export function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
