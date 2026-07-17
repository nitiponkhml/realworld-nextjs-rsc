export class ExhaustiveError extends Error {
  static {
    this.prototype.name = "ExhaustError";
  }

  constructor(value: never, message = `Unsupported type: ${value}`) {
    super(message);
  }
}
