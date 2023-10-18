export function isPangram(sentence: string): boolean {
  const ALPHABET = /[a-z]/g;
  const lettersPresent = new Set(sentence.toLowerCase().match(ALPHABET));
  const isCompleteAlphabetPresent = lettersPresent.size === 26;
  return isCompleteAlphabetPresent;
}
