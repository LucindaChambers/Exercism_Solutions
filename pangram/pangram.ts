export function isPangram(sentence: string): boolean {
  const pattern = /[a-z]/g; 
  const lettersPresent = new Set(sentence.toLowerCase().match(pattern));
  const completeAlphabetPresent = (lettersPresent.size >= 26);
  return completeAlphabetPresent;
}