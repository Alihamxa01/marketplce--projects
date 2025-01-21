export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production", // Correct usage of `||`
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "z2997vq8", // Correct usage of `||`
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_TOKEN || "skpuMMHlaESrkolGp636zL5N9pfBzoZVriORVuj0HQwr0UYeM9pg2U2qjDWKVnwlZRQWSQMQuD58MQYlEzN5dMXHgz31ZwyVKg1v1IrBapHwLvFbPVDtqyFzZ5YM9ZIyBzPV0oOw2QGGzTQg7dtltUSSwomqIQk71VvaotAKHm75LNJ2bzzW", // Correct usage of `||`
  'Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}