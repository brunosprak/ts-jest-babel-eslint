import { Foo } from './foo';

describe('test', () => {
  test('test', () => {
    const foo: Foo = new Foo(1);
    let foo2: Foo | undefined;

    expect(foo.calc(11)).toBe(12);
  });
});
