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

export function decodedValue(colors: string[]): number {

  const value1 = colorMap.get(colors[0]); // used ?? but then have to return a number that might disrupt the maths in another scenario
  const value2 = colorMap.get(colors[1]);

  if (value1 === undefined || value2 === undefined) {
    throw new Error('Invalid input.');
  }
  
  const result = value1 * 10 + value2;
  return result;
}

// const inputColors = ['blue', 'yellow'];
// const callFunction = decodedValue(inputColors);
// console.log(callFunction);


