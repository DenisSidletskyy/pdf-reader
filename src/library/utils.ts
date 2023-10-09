import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classValues: Array<ClassValue>) {
    return twMerge(clsx(classValues))
}