export function toRna(dna: string): string {
  const INVALID_DNA_RE = RegExp(`[^GCTA]`);

  if (INVALID_DNA_RE.test(dna)) {
    throw Error("Invalid input DNA.");
  }

  return dna
    .replaceAll("A", "U")
    .replaceAll("T", "A")
    .replaceAll("G", "X")
    .replaceAll("C", "G")
    .replaceAll("X", "C");
}
