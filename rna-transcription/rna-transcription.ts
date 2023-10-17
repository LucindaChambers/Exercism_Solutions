export function toRna(dna: string): string {
  if (/[^GCTA]/.test(dna)) {
    throw Error("Invalid input DNA.");
  }

  return dna
    .replaceAll("A", "U")
    .replaceAll("T", "A")
    .replaceAll("G", "X")
    .replaceAll("C", "G")
    .replaceAll("X", "C");
}

/*
is it better to replace if with if (!(...)) {
  return ...
}
*/
