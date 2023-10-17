const spaceOrbits = new Map([
  ["mercury", 0.2408467],
  ["venus", 0.61519726],
  ["earth", 1.0],
  ["mars", 1.8808158],
  ["jupiter", 11.862615],
  ["saturn", 29.447498],
  ["uranus", 84.016846],
  ["neptune", 164.79132],
]);

// could use enums

export function age(planet: string, seconds: number): number {
  if (planet === undefined || seconds === undefined) {
    throw new Error("Invalid input");
  }

  const SECONDS_IN_EARTH_YEAR = 31557600;
  let orbitalPeriod = spaceOrbits.get(planet);

  if (orbitalPeriod === undefined) {
    throw new Error("Orbital period undefined");
  }
  const ageOnEarth = seconds / SECONDS_IN_EARTH_YEAR / orbitalPeriod;
  return Math.round(ageOnEarth * 100) / 100; // or toFixed chooses how many decimals you want
}
