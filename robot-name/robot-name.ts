export class Robot {
  static usedRobotNames: Set<string> = new Set<string>();

  private robotName: string;

  constructor() {
    this.robotName = Robot.generateUniqueName();
  }

  public get name(): string {
    return this.robotName;
  }

  public resetName(): void {
    this.robotName = Robot.generateUniqueName();
  }

  public static releaseNames(): void {
    Robot.usedRobotNames.clear();
  }

  private static generateRandomLetter(): string {
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    return randomLetter;
  }

  private static generateRandomNumber(): string {
    const NUMBER = "0123456789";
    const randomNumber = NUMBER[Math.floor(Math.random() * NUMBER.length)];
    return randomNumber;
  }

  private static generateRandomName(): string {
    const randomName = `${Robot.generateRandomLetter()}${Robot.generateRandomLetter()}${Robot.generateRandomNumber()}${Robot.generateRandomNumber()}${Robot.generateRandomNumber()}`;
    return randomName;
  }

  private static generateUniqueName(): string {
    let newName = "";
    let nameExists = false;

    do {
      newName = Robot.generateRandomName();
      nameExists = Robot.usedRobotNames.has(newName);
    } while (nameExists);

    Robot.usedRobotNames.add(newName);

    return newName;
  }
}
