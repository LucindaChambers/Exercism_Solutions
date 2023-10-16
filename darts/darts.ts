export function score(x: number, y: number): number {
  
  const distanceFromCentre = Math.sqrt(x ** 2 + y ** 2);

  if (distanceFromCentre > 10) {
    return 0;
  } else if (distanceFromCentre > 5) {
    return 1;
  } else if (distanceFromCentre > 1) {
    return 5;
  } else {
    return 10;
  }
}
