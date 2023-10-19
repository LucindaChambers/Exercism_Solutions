// checks if last non whitespace character is '?'
function isQuestion(message: string): boolean {
  return message.trim().endsWith("?");
}

// checks an upper case letter exists, ensuring that the string has alphabetical characters and that all letters are uppercase
function isUpperCase(message: string): boolean {
  return /[A-Z]/.test(message) && message === message.toUpperCase();
}

// check for all whitesapce by checking if any non whitespace exist and return negation
function isAllWhitespace(message: string): boolean {
  return !/[a-z0-9]/i.test(message);
}

export function hey(message: string): string {
  if (isQuestion(message) && isUpperCase(message))
    return "Calm down, I know what I'm doing!";
  if (isQuestion(message)) return "Sure.";
  if (isUpperCase(message)) return "Whoa, chill out!";
  if (isAllWhitespace(message)) return "Fine. Be that way!";
  return "Whatever.";
}
