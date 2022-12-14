export class Base64UUID {
  private _length = 10;
  private _charset =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
  private static _length = 10;
  private static _charset =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
  constructor(length: number = 10, charset?: string) {
    if (charset && typeof charset !== "string")
      throw new TypeError("charset must be a string");

    if (charset === "") throw new Error("charset can not be empty");

    if (length <= 0) throw new Error("length must be greater than 0");
    if (isNaN(length)) throw new TypeError("length must be a number");
    if (charset) this._charset = charset as string;
    if (length) this._length = length;
  }

  static generate(length?: number, charset?: string) {
    if (charset && typeof charset !== "string")
      throw new TypeError("charset must be a string");

    if (charset === "") throw new Error("charset can not be empty");

    if ((length as number) <= 0)
      throw new Error("length must be greater than 0");
    if (length && isNaN(length as number))
      throw new TypeError("length must be a number");
    if (!charset) charset = this._charset;

    if (!length) length = this._length;
    return this.uid(length, charset);
  }
  generate() {
    const charset = this._charset;
    const length = this._length;
    return this.uid(length, charset);
  }

  private uid(length: number, charset: string) {
    let uid = "";
    const charLen = charset.length;
    for (let i = 0; i < length; ++i) {
      uid += charset[Math.floor(Math.random() * charLen)];
    }

    return uid;
  }
  private static uid(length: number, charset: string) {
    let uid = "";
    const charLen = charset.length;
    for (let i = 0; i < length; ++i) {
      uid += charset[Math.floor(Math.random() * charLen)];
    }

    return uid;
  }
}
