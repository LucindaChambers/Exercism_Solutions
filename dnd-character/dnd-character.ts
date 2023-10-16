// abilities: strength, dexterity, constitution, intelligence, wisdom, charisma
// each assigned a random score by rolling 4x 6 sided dice and summing 3 highest

// hitpoints: 10 + constitution modifier

// modifier: (value - 10) / 2 (round down)

export class DnDCharacter {
  strength: number = DnDCharacter.generateAbilityScore();
  dexterity: number = DnDCharacter.generateAbilityScore();;
  constitution: number = DnDCharacter.generateAbilityScore();
  intelligence: number = DnDCharacter.generateAbilityScore();
  wisdom: number = DnDCharacter.generateAbilityScore();
  charisma: number = DnDCharacter.generateAbilityScore();
  hitpoints: number = 10 + DnDCharacter.getModifierFor(this.constitution);

  /* 
  // Mdn: 'if your instance properties' values do not depend on the 
  // constructor's arguments, you can define them as class fields (as above ^^)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

  strength: number;
  dexterity: number;
  // ...
  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    // ...
  }
  */
    
  public static generateAbilityScore(): number {
    // roll dice 4 times
    const diceRolls = Array.from({length: 4}, () => Math.floor((Math.random() * 6) + 1));
    // order dice rolls in ascending order
    diceRolls.sort();
    // sum highest 3 dice rolls (last three entries)
    const abilityScore = diceRolls[1] + diceRolls[2] + diceRolls[3];
    
    return abilityScore;
  }

  public static getModifierFor(abilityValue: number): number {
    const modifier = Math.floor((abilityValue - 10)/2);
    return modifier;
  };



}
