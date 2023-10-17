// DNA -> RNA: G -> C, C -> G, T -> A, A -> U

export function toRna(dna: string): string {
  // in case of input other than 'G', 'C', 'T', 'A'

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
