// export function flattenAttributes<T>(data: T): T | Record<string, unknown> {
//   // Check if data is a plain object; return as is if not
//   if (
//     typeof data !== 'object' ||
//     data === null ||
//     data instanceof Date ||
//     typeof data === 'function'
//   ) {
//     return data
//   }

//   // If data is an array, apply flattenAttributes to each element and return as array
//   if (Array.isArray(data)) {
//     return data.map((item) => flattenAttributes(item)) as unknown as T
//   }

//   // Initialize an object with an index signature for the flattened structure
//   const flattened: Record<string, unknown> = {}

//   // Iterate over each key in the object
//   for (const key in data) {
//     // Skip inherited properties from the prototype chain
//     if (!Object.prototype.hasOwnProperty.call(data, key)) continue

//     const value = data[key]

//     // If the key is 'attributes' or 'data', and its value is an object, merge their contents
//     if (key === 'attributes' || key === 'data') {
//       if (Array.isArray(value)) {
//         // If 'data' is an array, flatten the first element if it exists
//         if (value.length > 0) {
//           Object.assign(flattened, flattenAttributes(value[0]))
//         }
//       } else if (typeof value === 'object' && value !== null) {
//         // If 'attributes' or 'data' is a plain object, flatten it
//         Object.assign(flattened, flattenAttributes(value))
//       }
//     } else {
//       // For other keys, copy the value, applying flattenAttributes if it's an object
//       flattened[key] = flattenAttributes(value)
//     }
//   }

//   return flattened
// }

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337'
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null
  if (url.startsWith('data:')) return url
  if (url.startsWith('http') || url.startsWith('//')) return url
  return `${getStrapiURL()}${url}`
}
