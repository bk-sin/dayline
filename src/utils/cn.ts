import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Esta función combina clases y resuelve conflictos
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
