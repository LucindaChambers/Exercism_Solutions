export class DnDCharacter {
  strength: number = DnDCharacter.generateAbilityScore();
  dexterity: number = DnDCharacter.generateAbilityScore();
  constitution: number = DnDCharacter.generateAbilityScore();
  intelligence: number = DnDCharacter.generateAbilityScore();
  wisdom: number = DnDCharacter.generateAbilityScore();
  charisma: number = DnDCharacter.generateAbilityScore();
  hitpoints: number = 10 + DnDCharacter.getModifierFor(this.constitution);

  public static generateAbilityScore(): number {
    const diceRolls = Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * 6 + 1)
    );
    diceRolls.sort();
    const abilityScore = diceRolls[1] + diceRolls[2] + diceRolls[3];
    return abilityScore;
  }

  public static getModifierFor(abilityValue: number): number {
    const modifier = Math.floor((abilityValue - 10) / 2);
    return modifier;
  }
}

/* 
  // Mdn: 'if your instance properties' values do not depend on the 
  // constructor's arguments, you can define them as class fields (as above ^^)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
  // Otherwise we can use a constructor

export class DnDCharacter {
  strength: number;
  dexterity: number;
  ...

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    ...
  }
}
*/
