const colorMap = new Map([
  ["black", 0],
  ["brown", 1],
  ["red", 2],
  ["orange", 3],
  ["yellow", 4],
  ["green", 5],
  ["blue", 6],
  ["violet", 7],
  ["grey", 8],
  ["white", 9],
]);

export function decodedResistorValue(colors: string[]): string {

  const firstValue = colorMap.get(colors[0]); 
  const secondValue = colorMap.get(colors[1]);
  const zeros = colorMap.get(colors[2]);

  if (firstValue === undefined ||  secondValue === undefined || zeros === undefined) {
    throw new Error('Invalid input.');
  }

  let resistance = (firstValue * 10 + secondValue) * 10 ** zeros; 
  
  // conditions for 3 zeros to kilo, 6 zeros to mega, 9 zeros to giga

  if (resistance > 10 ** 9) {
    return `${resistance / 10 ** 9} gigaohms`; 
  } else if (resistance > 10 ** 6) {
    return `${resistance / 10 ** 6} megaohms`;
  } else if (resistance > 10 ** 3) {
    return `${resistance / 10 ** 3} kiloohms`;
  } else {
    return `${resistance} ohms`;
  }

}

