export class Foo {
  num: number;

  constructor(num: number) {
    this.num = num;
  }

  calc(sum: number) {
    return this.num + sum;
  }
}
